var Author = require('../models/author');


exports.createOne = async(req, res) => {

    let author = await Author.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: author
    })
}


exports.upadateOne = async(req, res) => {

    let author = await Author.findById(req.params.id, (err, author) => {
       
        author.description = req.body.description;
        author.name = req.body.name;
        author.save();

        res.json({
            status: 200,
            message: "sucess",
            data: author || err
        });
       
    });
}

exports.findOneBy = async(req, res) => {

    await Author.findById(req.params.id, (err, data) => {
        
        res.json({
            status: 200,
            message: "sucess",
            data: data || err
        });
       
    });
}

exports.findAllBy = async(req, res) => {
    let authors = await Author.find({});

    res.json({
        status: 200,
        message: "success",
        data: authors
    })
}

exports.deleteOne = async(req, res) => {

    let author = await Author.findById(req.params.id, (err, data) => {

        author.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null
            
        });

    });

    
}