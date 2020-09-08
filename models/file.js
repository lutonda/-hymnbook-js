var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const FileSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description: {
        type: String
    },
    identity: {
        type: String,
        require: true,
        unique: true
    },
    data: {
        type: String,
        require: true
    },
    hymns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hymn'
    }]

})


var File = (module.exports = mongoose.model("File", FileSchema));