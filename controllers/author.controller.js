var Author = require('../models/author');

exports.createOne = async(req, res) => {


    let author = req.params;
    //await Author.create(req.params);

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}


exports.upadateOne = async(req, res) => {
    let author = await Author.find(req.query.id)
    author.description = req.query.author.description;
    author.save;

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}

exports.findOneBy = async(req, res) => {
    let author = await Author.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}

exports.findAllBy = async(req, res) => {
    let author = await Author.find({});

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}

exports.deleteOne = async(req, res) => {
    let author = await Author.find(req.query.id);

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}