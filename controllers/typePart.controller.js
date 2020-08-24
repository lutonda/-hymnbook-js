let TypePart = require('../models/typePart');

exports.createOne = async(res, req) => {

    let types = await TypePart.create({ description: req.query.typePart.description});

    res.json({
        status: 200,
        message: "success",
        sources: types
    })
}

exports.updateOne = async(req, res) => {

    let types = await TypePart.find(req.query.id);
    types.description = req.query.typePart.description;
    types.save;

    res.json({
        status: 200,
        message: "success",
        sources: types
    })
}

exports.findAllBy = async(req, res) => {

    let types = await TypePart.find({});

    res.json({
        status: 200,
        message: "success",
        sources: types
    })
}

exports.findOneBy = async(req, res) => {

    let types = await TypePart.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        sources: types
    })
}

exports.deleteOne = async(req, res) => {

    let types = await TypePart.find(req.query.id);

    res.json({
        status: 200,
        message: "success",
        sources: types
    })
}