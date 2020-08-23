var Source = require("../models/source");

exports.index = function(req, res, next) {
    res.render("api", { title: "Hey", message: "Hello there!" });
};

exports.getAllSources = async function(req, res) {

    var sources = await Source.find()
    res.status = 200
    res.json({
        status: 200,
        message: "success",
        sources: sources
    })

};