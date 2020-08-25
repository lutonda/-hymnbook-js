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
    let part = await Part.findById(req.params.id, (err, data) => {

        part.text = req.body.text;
        part.order = req.body.order;
        part.save();

        res.json({
            status: 200,
            message: "success",
            data: data || err
        })
    });
    
}

exports.deleteOne = async(req, res) => {
    let part = await Part.findById(req.params.id, (err, data) => {

        part.remove();

        res.json({
            status: 200,
            message: "sucess",
            data: null
            
        });

    });
   
}

exports.findOneBy = async(req, res) => {
    let part = await Part.findById(req.params.id, (err, data) => {
        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
       
    });

   
}

exports.findAllBy = async(req, res) => {
    let parts = await Part.find({});

    res.json({
        status: 200,
        message: "success",
        data: parts
    });
}
