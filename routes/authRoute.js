const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
const {storage} = require('../middleware/upload');
const multer = require('multer');
const upload = multer({storage:storage});


Router.post('/register',authController.register);
Router.post('/login',authController.login);



module.exports = Router;