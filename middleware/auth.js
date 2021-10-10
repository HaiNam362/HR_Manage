const jwt = require("jsonwebtoken");
const Role = require("../models/role.models");
const UserRole = require('../models/userRole.models');
const Role_permission = require('../models/role_permission.models');
const User = require('../models/user.models');
const Api = require('../models/api.models')
const { response } = require("express");
const { parse } = require("uuid");

const verifyToken = async (req, res, next) => {
    const token = req.body.token || req.params.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = await jwt.verify(token, 'project', { algorithm: 'HS256' });
        const user_abc = await User.findOne({ where: { username: decoded.username } });
        req.user = user_abc.id;
    } catch (err) {
        console.error(err);
        return res.status(401).send("invalid token");
    }
    return next();
};


const decentralization = (roleArr) => {
    return async (req, res, next) => {
        try {
            let URL = {};
            let userRole = await UserRole.findAll({ where: { UserId: req.user } });
            let role = await Role.findOne({ where: { id: userRole[0].RoleId } });
            console.log(role);
            let checkRole = false;
            for (let i = 0; i < roleArr.length; i++) {
                if(roleArr[i] == parseInt (role.id)){
                    console.log('vào đây ======');
                    checkRole = true;
                    return next();
                }
            }
            res.status(404).send('unthozization');
        
        } catch (err) {
            console.error(err);

        }
    }
}
module.exports = {
    verifyToken,
    decentralization
};