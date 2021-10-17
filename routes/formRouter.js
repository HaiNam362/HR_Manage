const express =require('express');
const Router = express.Router();
const formController = require('../controllers/formController');
const {decentralization} = require('../middleware/auth');
const {verifyToken} = require('../middleware/auth');

Router.use(verifyToken);

Router.post('/create',decentralization([1,2,3]),formController.createForm,formController.sendEmail);
Router.put('/update/:id',decentralization([1,5]),formController.updateForm);
Router.get('/user',decentralization([1,5]),formController.getUserForm);
Router.get('/HR',decentralization([3]),formController.HRGetStatus);
Router.patch('/HR/:id',decentralization([3]),formController.HRPutStatusForm);
Router.get('/checkDueDate',decentralization([3]),formController.checkDueDate);
Router.get('/trailWork',decentralization([1]),formController.getFormTrail_work);
Router.get('/appraise',decentralization([1]),formController.getForm_APPRAISE);
// manage
Router.get('/manager',decentralization([4]),formController.getStatusForm);
Router.patch('/manager/:id',decentralization([4]),formController.PutStatusForm);
module.exports = Router;

