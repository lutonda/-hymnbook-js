var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const AuthorSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description: {
        type: String
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    hymns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hymn'
    }]

})


var Author = (module.exports = mongoose.model("Author", AuthorSchema));