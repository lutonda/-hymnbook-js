var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const UserSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    telephone: {
        type: String,
        unique: true
    },
    apikey: {
        type: String,
        unique: false,
        default:parseInt(Math.random()%100)
    },
    isActive: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
});

var User = (module.exports = mongoose.model("User", UserSchema));
