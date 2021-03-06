var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const HymnSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
        unique: true
    },
    number: {
        type: Number,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        require: false
    },
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
        require: true
    },
    parts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part'
    }],
    date: {
        type: Date,
        default: Date.now
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }]

})

var Hymn = (module.exports = mongoose.model("Hymn", HymnSchema));