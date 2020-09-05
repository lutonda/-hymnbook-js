let Language = require('../models/language');

exports.createOne = async (req, res) => {
    let language = await Language.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: language
    })
}

exports.updateOne = async (req, res) => {
    await Language.findById(req.params.id, (err, language) => {

        language.description = req.body.description;
        language.code = req.body.code;
        language.save();

        res.json({
            status: 200,
            message: "success",
            data: language || err
        });

    });
}

exports.deleteOne = async (req, res) => {
    await Language.findById(req.params.id, (err, language) => {
        language.remove();

        res.json({
            status: 200,
            message: "success",
            data: null
        });
    });
}

exports.findOneBy = async (req, res) => {
    await Language.findById(req.params.id, (err, language) => {
        res.json({
            status: 200,
            message: "success",
            data: language || err
        });
    });
}

exports.findAllBy = async (req, res) => {
    let languages = await Language.find({});

    res.json({
        status: 200,
        message: "success",
        data: languages
    })
}