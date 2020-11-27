import express from 'express';
import controller from '../controllers/AppointmentController'

const router = express.Router();

router.get('/listappointments', controller.listAppointments);
router.get('/getappointment', controller.getAppointment);
router.post('/addappointment', controller.addAppointment);
router.post('/deleteappointment', controller.deleteAppointment);
router.post('/updateappointment', controller.updateAppointment);


module.exports = router;
