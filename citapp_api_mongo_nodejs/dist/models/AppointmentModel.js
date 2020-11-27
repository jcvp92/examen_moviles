"use strict";

var _mongoose = require("mongoose");

var AppointmentSchema = new _mongoose.Schema({
    title: { type: String },
    date: { type: String },
    user: { type: String }
});

module.exports = (0, _mongoose.model)("Appointment", AppointmentSchema);