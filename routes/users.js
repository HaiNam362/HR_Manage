const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {storage} = require('../middleware/upload');
const multer = require('multer');
const upload = multer({storage:storage});

router.get('/',userController.getList);
router.put('/update/:id',userController.updateUser);
router.put('/uploadAvatar/:id',upload.single('avatar'),userController.uploadAvatar);

module.exports = router;
