const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/',userController.getList);
router.put('/update/:id',userController.updateUser);

module.exports = router;
