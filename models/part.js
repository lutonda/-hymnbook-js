var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const PartSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    order: {
        type: Number
    },
    text: {
        type: String
    },
    typePart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypePart'
    },
    hymn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hymn'
    }
})

var Part = (module.exports = mongoose.model("Part", PartSchema));