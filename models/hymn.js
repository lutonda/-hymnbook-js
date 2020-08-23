var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const HymnSchema = new mongoose.Schema({
    title: {
        type: String
    },
    number: {
        type: Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language'
    },
    parts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part'
    }],
})


var Hymn = (module.exports = mongoose.model("Hymn", HymnSchema));