let Part = require('../models/part');
let Hymn = require('../models/hymn');
let TypePart = require('../models/typePart')

const { hashSync } = require('bcryptjs');

exports.createOne = async (req, res) => {

    req.body.hymn = await Hymn.findById(req.body.hymn.id);
    req.body.typePart = await TypePart.findById(req.body.typePart.id);

    let part = await Part.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: part
    });
}

exports.updateOne = async (req, res) => {


    let part = await Part.findById(req.params.id, async (err, part) => {

        if(req.body.text)
            part.text = req.body.text;

        if(req.body.order)
            part.order = req.body.order;

        if (req.body.typePart)
            part.typePart = await TypePart.findById(req.body.typePart.id);

        part.save();

        res.json({
            status: 200,
            message: "success",
            data: part || err
        })
    });

}

exports.deleteOne = async (req, res) => {
    let part = await Part.findById(req.params.id, (err, data) => {
        part.remove();

        res.json({
            status: 200,
            message: "sucess",
            data: null

        });

    });

}

exports.findOneBy = async (req, res) => {
    let part = await Part.findById(req.params.id, (err, data) => {
        res.json({
            status: 200,
            message: "success",
            data: data || err
        });

    }).populate('hymn');


}

exports.findAllBy = async (req, res) => {
    let parts = await Part.find({}).populate('hymn');

    res.json({
        status: 200,
        message: "success",
        data: parts
    });
}