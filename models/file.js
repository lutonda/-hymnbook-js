var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const FileSchema = new mongoose.Schema({
    description: {
        type: String
    },
    identity: {
        type: String
    },
    data: {
        type: String
    },
    hymns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hymn'
    }]

})


var File = (module.exports = mongoose.model("File", FileSchema));