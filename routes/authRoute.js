const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');



Router.post('/register',authController.register);
Router.post('/login',authController.login);



module.exports = Router;

//post register
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *      - Auth  API
 *     summary: register
 *     description:
 *           retrieve token to access features
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PostRegister'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PostRegister'
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

// Post Login
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *      - Auth  API
 *     summary: login 
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PostLogin'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PostLogin'
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
