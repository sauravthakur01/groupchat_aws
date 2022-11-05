const express =require('express');
const router = express.Router();

const middleware = require('../middleware/auth')
const chatController = require('../controllers/chat')


router.post('/postMessage/:groupId', middleware.authentication , chatController.postMessage )

router.get('/getMessage/:groupId', middleware.authentication , chatController.getMessage )

module.exports = router;