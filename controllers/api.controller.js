var User = require("../models/user");
var Hymn = require("../models/hymn");
var PartType = require("../models/typePart");


exports.index = function(req, res, next) {
    res.render("api", { title: "Hey", message: "Hello there!" });
};

exports.getAllSources = async function(req, res) {

    var partsTypes = await PartType.find();

    res.json({
        status: 200,
        message: "success",
        sources: partsTypes
    })

};