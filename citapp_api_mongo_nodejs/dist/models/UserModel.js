"use strict";

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
    username: { type: String },
    password: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = (0, _mongoose.model)("User", UserSchema);