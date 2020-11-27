import {Schema, model} from 'mongoose';

const AppointmentSchema = new Schema({
    title: {type: String},
    date: {type: String},  
    user: {type: String}
});


module.exports = model("Appointment",AppointmentSchema);