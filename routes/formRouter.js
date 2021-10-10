const express =require('express');
const Router = express.Router();
const formController = require('../controllers/formController');
const {decentralization} = require('../middleware/auth');
const {verifyToken} = require('../middleware/auth');

Router.use(verifyToken);
Router.post('/create',decentralization([1,2,3,4]),formController.createForm);
Router.put('/update/:id',decentralization([1,2,3,4,5]),formController.updateForm);
// Router.post('/submit',formController.submitForm);
// Router.patch('/approve ',formController.approveForm);
// Router.patch('/close',formController.closeForm);
module.exports = Router;

