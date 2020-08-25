var Author = require('../models/author');

exports.createOne = async(req, res) => {

    let author = await Author.create(req.body);

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}


exports.upadateOne = async(req, res) => {

    let author = await Author.findById(req.params.id);
    author.description = req.body.description;
    author.save;

    res.json({
        status: 200,
        message: "success",
        sources: author
    })
}

exports.findOneBy = async(req, res) => {

    await Author.findById(req.params.id, (err, data) => {
        res.json({
            status: 200,
            message: "success",
            sources: data || err
        })
    });
}

exports.findAllBy = async(req, res) => {
    let authors = await Author.find({});

    res.json({
        status: 200,
        message: "success",
        sources: authors
    })
}

exports.deleteOne = async(req, res) => {
    let author = await Author.findById(req.params.id);
    author.remove()

    res.json({
        status: 200,
        message: "success"
    })
}