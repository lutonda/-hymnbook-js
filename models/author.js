var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const HymnSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description:{
        type: String
    }
   
    
})


var Author = (module.exports = mongoose.model("Author", HymnSchema));