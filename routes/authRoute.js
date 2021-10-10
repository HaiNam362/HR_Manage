const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');



Router.post('/register',authController.register);
Router.post('/login',authController.login);

// Router.use(verifyToken);
// Router.post('/update',unAuthorize('/api/formmanage') ,function(req, res){
//     res.send('xác Thưc thành công');
// })




module.exports = Router;