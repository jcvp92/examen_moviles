import Appointment from '../models/AppointmentModel';
let controller = {
    addAppointment: async (req, res) =>{
        const {title, date, user, name,lastname,identity,borndate,city,suburb,phone} = req.body;
        const newAppointment = new Appointment({title,date,user,name,lastname,identity,borndate,city,suburb,phone});
        await newAppointment.save();
        return res.status(200).json({
            response: "Appointment added successfully"
        });
    },
    getAppointment: async (req,res) =>{
        const id = req.query.id;
        const appointment = await Appointment.findById({_id: id});
        return res.status(200).json({appointment});
    },
    listAppointments: async (req,res) =>{
        const appointments = await Appointment.find({ user: req.query.userid});
        if(appointments){
            return res.status(200).json({appointments});
        }else{
            return res.status(404).json({appointments});
        }
    },
    updateAppointment: async (req,res) =>{
        const {id,title,date, userid} = req.body;
        await Appointment.findByIdAndUpdate(id,{title, date, userid});
        return res.status(200).json({
            response: "Appointment updated successfully"
        });
    },
    deleteAppointment: async (req,res) =>{
        const {id} = req.body;
        await Appointment.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Appointment deleted successfully"
        });
    },
}

module.exports = controller;