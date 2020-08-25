let TypePart = require('../models/typePart');

exports.createOne = async(res, req) => {
    let typePart = await TypePart.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: typePart
    })
}

exports.updateOne = async(req, res) => {
    let typePart = await TypePart.findById(req.params.id);
    typePart.description = req.body.description;
    typePart.save;

    res.json({
        status: 200,
        message: "success",
        data: typePart
    })
}

exports.findAllBy = async(req, res) => {
    let typeParts = await TypePart.find({});

    res.json({
        status: 200,
        message: "success",
        data: typeParts
    })
}

exports.findOneBy = async(req, res) => {
    let typePart = await TypePart.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: typePart
    })
}

exports.deleteOne = async(req, res) => {

    let types = await TypePart.find(req.params.id);
    types.remove();

    res.json({
        status: 200,
        message: "success",
        data: null
    })
}