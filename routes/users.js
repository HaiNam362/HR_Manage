const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {storage} = require('../middleware/upload');
const multer = require('multer');
const upload = multer({storage:storage});
const {decentralization} = require('../middleware/auth');
const {verifyToken} = require('../middleware/auth');

router.use(verifyToken);

router.get('/',userController.getList);
router.put('/update',userController.updateUser);
router.put('/uploadAvatar',upload.single('avatar'),userController.uploadAvatar);

module.exports = router;
