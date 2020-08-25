let TypePart = require('../models/typePart');

exports.createOne = async(res, req) => {
    let typePart = await TypePart.create(req.body, (err, data)=>{

        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
    });

}

exports.updateOne = async(req, res) => {
    let typePart = await TypePart.findById(req.params.id, (err, data) => {

        typePart.description = req.body.description;
        typePart.save;

        res.json({
            status: 200,
            message: "success",
            data: data || err
        })
    });
    
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
    let typePart = await TypePart.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
    });

    
}

exports.deleteOne = async(req, res) => {

    let types = await TypePart.find(req.params.id, (err, data) => {

        types.remove();

        res.json({
            status: 200,
            message: "success",
            data: null
        })
    });
    
}