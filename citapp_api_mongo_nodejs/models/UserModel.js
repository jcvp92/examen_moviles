import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    username: {type: String},
    password: {type: String},
    date: {type: Date, default: Date.now},
});

module.exports = model("User",UserSchema);