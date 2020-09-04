let Hymn = require('../models/hymn');
let Part = require('../models/part');
let Author = require('../models/author');
let Language = require('../models/language');

exports.createOne = async (req, res) => {

    if (req.body.author._id)
        req.body.author = await Author.findById(req.body.author.id);
    else {
        req.body.author = null//;await Author.create(req.body.author);
    }

    let parts = req.body.parts;
    req.body.parts = null;

    req.body.language = await Language.findById(req.body.language._id)

    Hymn.create(req.body, async (err, hymn) => {
        parts.forEach(async (part) => {
            part.hymn = hymn;
            await Part.create(part)
        });

        res.json({
            status: 200,
            message: "success",
            data: hymn
        })
    });

}

exports.updateOne = async (req, res) => {

    let hymn = await Hymn.findById(req.params.id, async (err, hymn) => {

        if (req.body.number)
            hymn.number = req.body.number;
        if (req.body.title)
            hymn.title = req.body.title;
        if (req.body.author)
            hymn.author = await Author.findById(req.body.author._id)
        if (req.body.language)
            hymn.language = await Language.findById(req.body.language._id)

        req.body.parts.forEach(async part => {
            if (part._id)
                await Part.findById(part._id, async (err, newPart) => {
                    newPart.text = part.text;
                    newPart.typePart = part.typePart;
                    newPart.save();
                })
            else {
                part.hymn = hymn;
                await Part.create(part)
            }

        })
        hymn.save();

        res.json({
            status: 200,
            message: "success",
            data: hymn || err
        });
    });
}

exports.deleteOne = async (req, res) => {
    let hymn = await Hymn.findById(req.params.id, (err, data) => {
        hymn.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null
        });
    });
}

exports.findOneBy = async (req, res) => {

    Hymn.findById(req.params.id, async (err, data) => {
        data.parts = await Part.find({ "hymn": data.id }).populate('typePart');
        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
    }).populate('author').populate('language');
}

exports.findAllBy = async (req, res) => {
    let hymns = await Hymn.find({}).populate('author');

    res.json({
        status: 200,
        message: "success",
        data: hymns
    })
}