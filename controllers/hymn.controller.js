let Hymn = require('../models/hymn');

exports.createOne = async (req, res) =>{

    let hymn = await Hymn.create({description: req.query.hymn.description});

    res.json({
        status: 200,
        message: "success",
        sources: hymn
    })
}

exports.updateOne = async (req, res) => {
    let hymn = await Hymn.find(req.query.id);
    hymn.description = req.query.hymn.description;
    hymn.save;

    res.json({
        status: 200,
        message: "success",
        sources: hymn
    })
}

exports.deleteOne = async (req, res) => {
    let hymn = await Hymn.find(req.query.id);
    
    res.json({
        status: 200,
        message: "success",
        sources: hymn
    })
}

exports.findOneBy = async (req, res) =>{
    let hymn = await Hymn.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        sources: hymn
    })
}

exports.findAllBy = async (req, res) =>{
    let hymn = await Hymn.find({});

    res.json({
        status: 200,
        message: "success",
        sources: hymn
    })
}