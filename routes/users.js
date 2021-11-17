const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { storage } = require('../middleware/upload');
const multer = require('multer');
const upload = multer({ storage: storage });
const { decentralization } = require('../middleware/auth');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

router.get('/getList', decentralization([1, 2, 3, 4]), userController.getList);
router.get('/getList/:id', decentralization([1, 2, 3, 4, 5]), userController.getListID);
router.put('/update', userController.updateUser);
router.put('/uploadAvatar', upload.single('avatar'), userController.uploadAvatar);

module.exports = router;

// get list + ID
/**
 * @swagger
 * /api/v1/users/getList/{id}:
 *   get:
 *     tags:
 *      -  User API 
 *     summary: get list + id
 *     description:
 *           retrieve token to access features
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
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

// update user
/**
 * @swagger
 * /api/v1/users/update:
 *   put:
 *     tags:
 *      - User API
 *     summary: update user
 *     description:
 *           retrieve token to access features
 *     requestBody:
 *       content:
 *        application/json:
 *         schema:
 *            $ref: '#/components/formData/PutUpdate'
 *     responses:
 *       200:
 *         description: create a form with admin access
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/formData/PutUpdate'
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

// get list
/**
 * @swagger
 * /api/v1/users/getList:
 *   get:
 *     tags:
 *      - User API
 *     summary: get list
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


