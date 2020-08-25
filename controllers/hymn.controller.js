let Hymn = require('../models/hymn');
let Author = require('../models/author');
let Language = require('../models/language');


exports.createOne = async(req, res) => {

    let hymn = await Hymn.create(req.body);

    res.json({
        status: 200,
        message: "success",
        data: hymn
    })
}

exports.updateOne = async(req, res) => {

    let hymn = await Hymn.findById(req.params.id,  async (err, data) => {

        hymn.number = req.body.number;
        hymn.title = req.body.title;
        hymn.author = await Author.findById(req.body.author.id)
        hymn.Language = await Language.findById(req.body.author.id)
        hymn.save();
    
        res.json({
            status: 200,
            message: "success",
            data: data || err
        });

    });
    
}

exports.deleteOne = async(req, res) => {
    let hymn = await Hymn.findById(req.params.id,  (err, data) => {

        hymn.remove()

        res.json({
            status: 200,
            message: "sucess",
            data: null
            
        });

    });

}

exports.findOneBy = async(req, res) => {

    let hymn = Hymn.findById(req.params.id, (err, data)=>{

        res.json({
            status: 200,
            message: "success",
            data: data || err
        });
    });

   
}

exports.findAllBy = async(req, res) => {
    let hymns = await Hymn.find({}).populate('author');

    res.json({
        status: 200,
        message: "success",
        data: hymns
    })
}