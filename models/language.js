var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const LanguageSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description: {
        type: String,
        require:true,
        unique:true
    },
    code:{
        type: String,
        require:true,
        unique:true
    },
    hymns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hymn'
    }]
})

var Language = (module.exports = mongoose.model("Language", LanguageSchema));