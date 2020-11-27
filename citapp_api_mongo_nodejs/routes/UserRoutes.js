import express from 'express';
import userController from '../controllers/UserController'

const router = express.Router();

router.get('/listusers', userController.listUsers);
router.get('/getuser', userController.getUser);
router.post('/validateuser', userController.validateUser);
router.post('/adduser', userController.addUser);
router.post('/deleteuser', userController.deleteUser);
router.post('/updateuser', userController.updateUser);

module.exports = router;