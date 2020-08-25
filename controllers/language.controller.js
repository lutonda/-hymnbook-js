let Language = require('../models/language');

exports.createOne = async(req, res) => {
    let language = await Language.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: language
    })
}

exports.updateOne = async(req, res) => {
    let language = await Language.findById(req.params.id);
    language.description = req.body.description;
    language.save;

    res.json({
        status: 200,
        message: "success",
        data: language
    })
}

exports.deleteOne = async(req, res) => {
    let language = await Language.findById(req.params.id);
    language.remove();

    res.json({
        status: 200,
        message: "success"
    })
}

exports.findOneBy = async(req, res) => {
    let language = await Language.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: language
    })
}

exports.findAllBy = async(req, res) => {
    let languages = await Language.find({});

    res.json({
        status: 200,
        message: "success",
        data: languages
    })
}