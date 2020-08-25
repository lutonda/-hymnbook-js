let Hymn = require('../models/hymn');
let Part = require('../models/part');
let Author = require('../models/author');
let Language = require('../models/language');

exports.createOne = async(req, res) => {

    if (req.body.author.id)
        req.body.author = await Author.findById(req.body.author.id);
    else {
        req.body.author = await Author.create(req.body.author);
    }

    let parts = req.body.parts;
    req.body.parts = null;

    let hymn = await Hymn.create(req.body);

    parts.forEach(async(part) => {
        part.hymn = hymn;
        await Part.create(part)
    });

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.updateOne = async(req, res) => {

    let hymn = await Hymn.findById(req.params.id, async(err, data) => {

        hymn.number = req.body.number;
        hymn.title = req.body.title;
        hymn.author = await Author.findById(req.body.author.id)
        hymn.Language = await Language.findById(req.body.author.id)
        hymn.save();

        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
    });
}

exports.deleteOne = async(req, res) => {
    let hymn = await Hymn.findById(req.params.id, (err, data) => {
        hymn.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null
        });
    });
}

exports.findOneBy = async(req, res) => {

    Hymn.findById(req.params.id, async(err, data) => {
        data.parts = await Part.find({ "hymn": data.id }).populate('typePart');
        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
    }).populate('author');
}

exports.findAllBy = async(req, res) => {
    let hymns = await Hymn.find({}).populate('author');

    res.json({
        status: 200,
        message: "success",
        data: hymns
    })
}