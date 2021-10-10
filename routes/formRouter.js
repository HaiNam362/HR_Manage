const express =require('express');
const Router = express.Router();
const formController = require('../controllers/formController');
const {decentralization} = require('../middleware/auth');
const {verifyToken} = require('../middleware/auth');

Router.use(verifyToken);
Router.post('/create',decentralization([3,4]),formController.createForm);
// Router.put('/update/:id',formController.updateForm);
// Router.post('/submit',formController.submitForm);
// Router.patch('/approve ',formController.approveForm);
// Router.patch('/close',formController.closeForm);
module.exports = Router;

