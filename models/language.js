var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const HymnSchema = new mongoose.Schema({
    id: {
        type: Number
    }
    
    
})


var Language = (module.exports = mongoose.model("Language", HymnSchema));