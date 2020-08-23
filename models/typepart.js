var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const HymnSchema = new mongoose.Schema({
    idTypePart: {
        type: Number
    }
   
})


var TypePart = (module.exports = mongoose.model("TypePart", HymnSchema));