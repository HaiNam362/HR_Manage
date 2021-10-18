const express = require('express');
const Router = express.Router();
const formController = require('../controllers/formController');
const { decentralization } = require('../middleware/auth');
const { verifyToken } = require('../middleware/auth');

Router.use(verifyToken);

Router.post('/create', decentralization([1, 2, 3]), formController.createForm, formController.sendEmail);
Router.put('/update/:id', decentralization([1, 5]), formController.updateForm);
Router.get('/user', decentralization([1, 5]), formController.getUserForm);
Router.get('/HR', decentralization([3]), formController.HRGetStatus);
Router.patch('/HR/:id', decentralization([3]), formController.HRPutStatusForm);
Router.get('/checkDueDate', decentralization([3]), formController.checkDueDate);
Router.get('/trailWork', decentralization([1]), formController.getFormTrail_work);
Router.get('/appraise', decentralization([1]), formController.getForm_APPRAISE);
// manage
Router.get('/manager', decentralization([4]), formController.getStatusForm);
Router.patch('/manager/:id', decentralization([4]), formController.PutStatusForm);
module.exports = Router;

//post form
/**
 * @swagger
 * /api/v1/form/create:
 *   post:
 *     tags:
 *      - Form API
 *     summary: admin create form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PostForm'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PostForm'
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

//put form
/**
 * @swagger
 * /api/v1/form/update/{id}:
 *   put:
 *     tags:
 *      - Form API
 *     summary: admin update form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PutForm'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PutForm'
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

//get user form
/**
 * @swagger
 * /api/v1/form/user:
 *   get:
 *     tags:
 *      - Form API
 *     summary: get user form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// get HR Status Form  
/**
 * @swagger
 * /api/v1/form/HR:
 *   get:
 *     tags:
 *      - Form API
 *     summary: HR get status form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// HR patch status form   
/**
 * @swagger
 * /api/v1/form/HR/{id}:
 *   patch:
 *     tags:
 *      - Form API
 *     summary: HR Patch status form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PatchHRForm'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PatchHRForm'
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// get manage status from 
/**
 * @swagger
 * /api/v1/form/manager:
 *   get:
 *     tags:
 *      - Form API
 *     summary: manager get status form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// patch manage status from 
/**
 * @swagger
 * /api/v1/form/manager/{id}:
 *   patch:
 *     tags:
 *      - Form API
 *     summary: HR Patch status form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PATCHManagerForm'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PATCHManagerForm'
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// get HR checkDueDate form 
/**
 * @swagger
 * /api/v1/form/checkDueDate:
 *   get:
 *     tags:
 *      - Form API
 *     summary: HR checkDueDate form
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// get admin form đánh giá 
/**
 * @swagger
 * /api/v1/form/appraise:
 *   get:
 *     tags:
 *      - Form API
 *     summary: HR check form appraise
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */

// get admin form thử việc
/**
 * @swagger
 * /api/v1/form/trailWork:
 *   get:
 *     tags:
 *      - Form API
 *     summary: admin check form trailWork
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       404:
 *         description:
 *            error if the field is blank, OR
 *            error if wrong user name or password
 *         content:
 *            application/json:
 *             schema:
 *               type: object
 *
 */
