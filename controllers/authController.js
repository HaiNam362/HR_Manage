const userModels = require('../models/user.models');
const userRoleModels = require('../models/userRole.models');
const RoleModels = require('../models/role.models');
const Employee = require('../models/employee.models.js')
const loggers = require('../utils/logger');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelizeDB = require('../config/database')

// register
exports.register = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const t = await sequelizeDB.transaction();
    const { username, password, age, email, phone, address, isActive, identityNumber, socialInsurance,avatar, isDelete } = req.body;
    const { lastName, fullName, userId, managerId, isDeleted } = req.body.Employee;
    const { isDeleteD } = req.body.userRoleModels;
    try {
        const user = await userModels.create({
            username: username,
            password: hashedPassword,
            age: age,
            email: email,
            phone: phone,
            address: address,
            isActive: isActive,
            identityNumber: identityNumber,
            socialInsurance: socialInsurance,
            createBy:username,
            updateBy:username,
            avatar: avatar,
            isDeleted: isDelete,
        }, { transaction: t });
        await Employee.create({
            UserId: user.id,
            lastName: lastName,
            fullName: fullName,
            createBy: username,
            updateBy: username,
            isDeleted: isDeleted,
        }, { transaction: t });
        const role = await RoleModels.findOne({
            where: {
                id: req.body.RoleID
            }
        },{transaction: t})
        await user.addRole(role,{transaction: t});
        await t.commit();
    } catch (err) {
        await t.rollback();
        console.log(err);
    }
}

// login
exports.login = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await userModels.findOne({ where: { username: username } });
        if (!user) {
            res.status(400).json({
                status: false,
                message: 'username and password do not exist'
            });
        } else {
            let check = await bcrypt.compare(password, user.password);
            if (user.username === username && check == true) {
                const token = jwt.sign({ username, password }, 'project', { algorithm: 'HS256' });
                res.status(200).json({
                    status: ' login successfully',
                    user: user,
                    accessToken: token,
                })
            } else {
                res.status(400).json({
                    status: false,
                    message: 'password do not exist'
                })
            }
        }
    } catch (error) {
        loggers.error(new Error(error));
    }
}

