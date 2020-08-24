let Part = require('../models/part');

exports.createOne = async (req, res) =>{

    let part = await Part.create({description: req.query.part.description});

    res.json({
        status: 200,
        message: "success",
        sources: part
    })
}

exports.updateOne = async (req, res) => {
    let part = await Part.find(req.query.id);
    part.description = req.query.part.description;
    part.save;

    res.json({
        status: 200,
        message: "success",
        sources: part
    })
}

exports.deleteOne = async (req, res) => {
    let part = await Part.find(req.query.id);

    res.json({
        status: 200,
        message: "success",
        sources: part
    })
}

exports.findOneBy = async (req, res) =>{
    let part = await Part.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        sources: part
    })
}

exports.findAllBy = async (req, res) =>{
    let part = await Part.find({});

    res.json({
        status: 200,
        message: "success",
        sources: part
    })
}