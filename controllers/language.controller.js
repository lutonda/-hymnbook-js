let Language = require('../models/language');

exports.createOne = async (req, res) =>{

    let lang = await Language.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}

exports.updateOne = async (req, res) => {
    let lang = await Language.findById(req.params.id);
    lang.description = req.body.description;
    lang.code = req.body.code;
    lang.save();

    res.json({
        status: 200,
        message: "success",
        data: lang
    })
}

exports.deleteOne = async (req, res) => {
    let lang = await Language.findById(req.params.id);
        lang.remove();

    res.json({
        status: 200,
        message: "success",
        data: null
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