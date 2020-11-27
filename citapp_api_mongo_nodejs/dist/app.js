'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AppointmentRoutes = require('./routes/AppointmentRoutes');

var _AppointmentRoutes2 = _interopRequireDefault(_AppointmentRoutes);

var _UserRoutes = require('./routes/UserRoutes');

var _UserRoutes2 = _interopRequireDefault(_UserRoutes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.json());
app.use('/api', _UserRoutes2.default);
app.use('/api', _AppointmentRoutes2.default);

module.exports = app;