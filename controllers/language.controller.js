let Language = require('../models/language');

exports.createOne = async(req, res) => {
    let language = await Language.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: language
    })
}

exports.updateOne = async(req, res) => {
    let language = await Language.findById(req.params.id, (err, data) => {

        language.description = req.body.description;
        language.save;
    
        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
       
    });
    
}

exports.deleteOne = async(req, res) => {
    let language = await Language.findById(req.params.id, (err, data) => {

        language.remove();

        res.json({
            status: 200,
            message: "success",
            data: null
            
        });
       
    });
    
}

exports.findOneBy = async(req, res) => {
    let language = await Language.findById(req.params.id, (err, data) => {

        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
       
    });

   
}

exports.findAllBy = async(req, res) => {
    let languages = await Language.find({});

    res.json({
        status: 200,
        message: "success",
        data: languages
    })
}