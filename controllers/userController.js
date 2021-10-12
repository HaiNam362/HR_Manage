const userModels = require('../models/user.models');
const loggers = require('../utils/logger');
const bcrypt = require('bcryptjs');
const multer = require('multer');

// get employee
exports.getList = async (req, res, next) => {

}

exports.uploadAvatar = async (req, res, next) => {
    try {
        console.log(req.file);
        const userId = req.params.id;
        const userDB = await userModels.findOne({where: {id: userId} })
        console.log(userId);
        if (!userDB) {
            res.status(404).send({ message: "not found" })
        }
        console.log(userDB);
         await userDB.update({
            avatar: req.file.filename
        })
        res.status(200).json({
            status: 'upload avatar success',
            data: userDB
        })
    } catch (err) {
        console.log(err);
    }
}

exports.updateUser = async (req, res, next) => {
    const id = req.params.id;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    let data = {};
    const userDB = await userModels.findOne({ id: id })
    if (!userDB) {
        res.status(404).send({ message: "not found" })
    }
    try {
        const { username, password, age, email, phone, address, isActive, identityNumber, socialInsurance, avatar, isDeleted } = req.body;
        userDB.set({ username: username, password: hashedPassword, age: age, email: email, phone: phone, address: address, isActive: isActive, identityNumber: identityNumber, socialInsurance: socialInsurance, avatar: avatar, isDeleted: isDeleted })
        const users = await userDB.save(userDB);
        data.user = users;
        return res.status(200).send({ message: "update successfully", data: data });

    } catch (error) {

        loggers.error(new Error(error));
    }
}

