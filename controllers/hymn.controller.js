let Hymn = require('../models/hymn');

exports.createOne = async (req, res) =>{

    let hymn = await Hymn.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.updateOne = async (req, res) => {
    let hymn = await Hymn.findById(req.params.id);
    hymn.title = req.body.title;
    hymn.save();

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.deleteOne = async (req, res) => {
    let hymn = await Hymn.findById(req.params.id);
        hymn.remove();
    
    res.json({
        status: 200,
        message: "success",
        data: null
    })
}

exports.findOneBy = async (req, res) =>{
    let hymn = await Hymn.findById(req.params.id);

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.findAllBy = async (req, res) =>{
    let hymn = await Hymn.find({});

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}