let Part = require('../models/part');

exports.createOne = async(req, res) => {
    let part = await Part.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: part
    })
}

exports.updateOne = async(req, res) => {
    let part = await Part.findById(req.params.id);
    part.description = req.body.description;
    part.save;

    res.json({
        status: 200,
        message: "success",
        data: part
    })
}

exports.deleteOne = async(req, res) => {
    let part = await Part.findById(req.params.id);
    part.remove();

    res.json({
        status: 200,
        message: "success"
    })
}

exports.findOneBy = async(req, res) => {
    let part = await Part.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: part
    })
}

exports.findAllBy = async(req, res) => {
    let parts = await Part.find({});

    res.json({
        status: 200,
        message: "success",
        data: parts
    })
}