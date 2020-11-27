'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserController = require('../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/listusers', _UserController2.default.listUsers);
router.get('/getuser', _UserController2.default.getUser);
router.post('/validateuser', _UserController2.default.validateUser);
router.post('/adduser', _UserController2.default.addUser);
router.post('/deleteuser', _UserController2.default.deleteUser);
router.post('/updateuser', _UserController2.default.updateUser);

module.exports = router;