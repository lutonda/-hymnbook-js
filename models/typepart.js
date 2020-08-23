var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const TypePartSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description: {
        type: String,
        unique: true
    },
    parts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part'
    }]


})


var TypePart = (module.exports = mongoose.model("TypePart", TypePartSchema));