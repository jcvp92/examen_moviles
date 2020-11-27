"use strict";

var _UserModel = require("../models/UserModel");

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    addUser: async function addUser(req, res) {
        console.log(req.body);
        var _req$body = req.body,
            username = _req$body.username,
            password = _req$body.password;

        var newUser = new _UserModel2.default({ username: username, password: password });
        await newUser.save();
        return res.status(200).json({
            response: "User added successfully"
        });
    },
    getUserById: async function getUserById(req, res) {
        var id = req.query.id;
        var user = await _UserModel2.default.findById({ _id: id });
        return res.status(200).json({ user: user });
    },
    getUser: async function getUser(req, res) {
        var username = req.body.username;
        var user = await _UserModel2.default.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ user: user });
        } else {
            return res.status(200).json({ user: user });
        }
    },
    validateUser: async function validateUser(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var user = await _UserModel2.default.findOne({ username: username });
        if (!user) {
            return res.status(404).json({
                response: "Username and password are invalid"
            });
        } else {
            if (password == user.password) {
                return res.status(200).json({ user: user });
            } else {
                return res.status(404).json({
                    response: "Username and password are invalid"
                });
            }
        }
    },
    listUsers: async function listUsers(req, res) {
        var users = await _UserModel2.default.find({});
        return res.status(200).json({ users: users });
    },
    updateUser: async function updateUser(req, res) {
        var _req$body2 = req.body,
            id = _req$body2.id,
            username = _req$body2.username,
            password = _req$body2.password;

        await _UserModel2.default.findByIdAndUpdate(id, { username: username, password: password });
        return res.status(200).json({
            response: "User updated successfully"
        });
    },
    deleteUser: async function deleteUser(req, res) {
        var id = req.body.id;

        await _UserModel2.default.findByIdAndDelete(id);
        return res.status(200).json({
            response: "User deleted successfully"
        });
    }
};

module.exports = controller;