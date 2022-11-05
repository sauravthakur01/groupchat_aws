const express =require('express');
const router = express.Router();

const resetPasswordController = require('../controllers/resetpassword')


router.use('/forgotpassword' , resetPasswordController.forgotpassword)

router.get('/resetpassword/:id' , resetPasswordController.resetpassword)

router.get('/updatepassword/:resetpasswordid' , resetPasswordController.updatepassword )


module.exports = router;