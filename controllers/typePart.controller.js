let TypePart = require('../models/typePart');

exports.createOne = async(res, req) => {

    let types = await TypePart.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: types
    })
}

exports.updateOne = async(req, res) => {

    let types = await TypePart.findById(req.params.id);
    types.description = req.body.description;
    types.save;

    res.json({
        status: 200,
        message: "success",
        data: types
    })
}

exports.findAllBy = async(req, res) => {

    let types = await TypePart.find({});

    res.json({
        status: 200,
        message: "success",
        data: types
    })
}

exports.findOneBy = async(req, res) => {

    let types = await TypePart.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: types
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