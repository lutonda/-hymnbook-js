let Hymn = require('../models/hymn');
let Author = require('../models/author');

exports.createOne = async(req, res) => {

    let hymn = await Hymn.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.updateOne = async(req, res) => {
    let hymn = await Hymn.findById(req.params.id);
    hymn.number = req.body.number;
    hymn.title = req.body.title;
    hymn.author = await Author.findById(req.body.author.id)
    hymn.save();

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.deleteOne = async(req, res) => {
    let hymn = await Hymn.findById(req.params.id);
    hymn.remove();

    res.json({
        status: 200,
        message: "success"
    })
}

exports.findOneBy = async(req, res) => {
    let hymn = await Hymn.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.findAllBy = async(req, res) => {
    let hymns = await Hymn.find({}).populate('author');

    res.json({
        status: 200,
        message: "success",
        data: hymns
    })
}