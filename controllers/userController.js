const userModels = require('../models/user.models');
const Employee = require('../models/employee.models.js')
const loggers = require('../utils/logger');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const sequelizeDB = require('../config/database')

// get employee
exports.getList = async (req, res, next) => {

}

exports.uploadAvatar = async (req, res, next) => {
    try {
        const userId = req.user;
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
    const userId = req.user; 
    console.log(userId,'123456789');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const {   age, email, phone, address, isActive, identityNumber, socialInsurance,  isDeleted ,updateBy} = req.body;
    const { lastName, fullName,isDeleteD ,updateBY} = req.body.Employee;
    const t = await sequelizeDB.transaction();
    const userDB = await userModels.findOne({ id: userId })
    if (!userDB) {
        res.status(404).send({ message: "not found" })
    }
    try {
        const user = await userModels.update({
            password: hashedPassword,
            age: age,
            email: email,
            phone: phone,
            address: address,
            isActive: isActive,
            identityNumber: identityNumber,
            socialInsurance: socialInsurance,
            updateBy:updateBy,
            isDeleted: isDeleted,
        },{where:{id : userId}, transaction: t});
        await Employee.update({
            UserId: user.id,
            lastName: lastName,
            fullName: fullName,
            updateBy: updateBY,
            isDeleteD: isDeleteD,
        },{where: {userId : userId},transaction: t});
        await t.commit();
        return res.status(200).send('update user success');
    } catch (error) {
        await t.rollback();
        loggers.error(new Error(error));
        console.log(error);
    }
}

