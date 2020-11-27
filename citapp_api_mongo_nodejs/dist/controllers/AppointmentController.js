"use strict";

var _AppointmentModel = require("../models/AppointmentModel");

var _AppointmentModel2 = _interopRequireDefault(_AppointmentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    addAppointment: async function addAppointment(req, res) {
        var _req$body = req.body,
            title = _req$body.title,
            date = _req$body.date,
            user = _req$body.user,
            name = _req$body.name,
            lastname = _req$body.lastname,
            identity = _req$body.identity,
            borndate = _req$body.borndate,
            city = _req$body.city,
            suburb = _req$body.suburb,
            phone = _req$body.phone;

        var newAppointment = new _AppointmentModel2.default({ title: title, date: date, user: user, name: name, lastname: lastname, identity: identity, borndate: borndate, city: city, suburb: suburb, phone: phone });
        await newAppointment.save();
        return res.status(200).json({
            response: "Appointment added successfully"
        });
    },
    getAppointment: async function getAppointment(req, res) {
        var id = req.query.id;
        var appointment = await _AppointmentModel2.default.findById({ _id: id });
        return res.status(200).json({ appointment: appointment });
    },
    listAppointments: async function listAppointments(req, res) {
        var appointments = await _AppointmentModel2.default.find({ user: req.query.userid });
        if (appointments) {
            return res.status(200).json({ appointments: appointments });
        } else {
            return res.status(404).json({ appointments: appointments });
        }
    },
    updateAppointment: async function updateAppointment(req, res) {
        var _req$body2 = req.body,
            id = _req$body2.id,
            title = _req$body2.title,
            date = _req$body2.date,
            userid = _req$body2.userid;

        await _AppointmentModel2.default.findByIdAndUpdate(id, { title: title, date: date, userid: userid });
        return res.status(200).json({
            response: "Appointment updated successfully"
        });
    },
    deleteAppointment: async function deleteAppointment(req, res) {
        var id = req.body.id;

        await _AppointmentModel2.default.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Appointment deleted successfully"
        });
    }
};

module.exports = controller;