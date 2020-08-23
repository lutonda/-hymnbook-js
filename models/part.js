var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const HymnSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    typePart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypePart'
    }]
    
})


var Part = (module.exports = mongoose.model("Part", HymnSchema));