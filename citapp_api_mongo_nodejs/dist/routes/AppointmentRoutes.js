'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AppointmentController = require('../controllers/AppointmentController');

var _AppointmentController2 = _interopRequireDefault(_AppointmentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/listappointments', _AppointmentController2.default.listAppointments);
router.get('/getappointment', _AppointmentController2.default.getAppointment);
router.post('/addappointment', _AppointmentController2.default.addAppointment);
router.post('/deleteappointment', _AppointmentController2.default.deleteAppointment);
router.post('/updateappointment', _AppointmentController2.default.updateAppointment);

module.exports = router;