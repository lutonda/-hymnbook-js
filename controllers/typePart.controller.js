let TypePart = require('../models/typePart');

exports.createOne = async (req, res) => {
    await TypePart.create(req.body, (err, typePart) => {
        res.json({
            status: 200,
            message: "success",
            data: typePart || err
        });
    });
}

exports.updateOne = async (req, res) => {
    await TypePart.findById(req.params.id, (err, typePart) => {
        typePart.description = req.body.description;
        typePart.save;

        res.json({
            status: 200,
            message: "success",
            data: typePart || err
        })
    });
}

exports.findAllBy = async (req, res) => {
    let typeParts = await TypePart.find({});

    res.json({
        status: 200,
        message: "success",
        data: typeParts
    })
}

exports.findOneBy = async (req, res) => {
    await TypePart.findById(req.params.id, (err, typePart) => {

        res.json({
            status: 200,
            message: "success",
            data: typePart || err
        });
    });
}

exports.deleteOne = async (req, res) => {
    await TypePart.find(req.params.id, (err, typePart) => {

        typePart.remove();

        res.json({
            status: 200,
            message: "success",
            data: null
        })
    });
}