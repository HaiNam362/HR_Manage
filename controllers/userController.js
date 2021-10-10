const userModels = require('../models/user.models');
const loggers = require('../utils/logger');
const bcrypt = require('bcryptjs');


// get employee
exports.getList = async (req, res, next) => {
    
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

