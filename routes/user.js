const express =require('express');
const router = express.Router();

const userController = require('../controllers/user')
const middleware = require('../middleware/auth')
const chatController = require('../controllers/chat')

router.post('/signup', userController.postSignup )

router.post('/login' , userController.postLogin)

router.post('/postMessage', middleware.authentication , chatController.postMessage )

router.get('/getMessage', middleware.authentication , chatController.getMessage )

module.exports = router;