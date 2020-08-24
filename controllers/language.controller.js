let Language = require('../models/language');

exports.createOne = async (req, res) =>{

    let lang = await Language.create({description: req.query.language.description});

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}

exports.updateOne = async (req, res) => {
    let lang = await Language.find(req.query.id);
    lang.description = req.query.lang.description;
    lang.save;

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}

exports.deleteOne = async (req, res) => {
    let lang = await Language.find(req.query.id);

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}

exports.findOneBy = async (req, res) =>{
    let lang = await Language.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}

exports.findAllBy = async (req, res) =>{
    let lang = await Language.find({});

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}