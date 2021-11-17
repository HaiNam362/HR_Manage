const { Sequelize, DataTypes } = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid');
const bcrypt = require('bcryptjs');
const Form = require('../models/form.models');
const Employee = require('../models/employee.models.js')
const Role = require('../models/role.models')
const UserRole = require('../models/userRole.models')

const User = sequelizeDB.define('Users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
    },
    password: {
        type: DataTypes.STRING(250),
    },
    age: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING(50),
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    address: {
        type: DataTypes.STRING(500),
    },
    isActive: {
        type: DataTypes.INTEGER(1),
    },
    identityNumber: {
        type: DataTypes.STRING(36),
    },
    socialInsurance: {
        type: DataTypes.STRING(36),
    },
    avatar: {
        type: DataTypes.STRING(255),
    },
    isDeleted: {
        type: DataTypes.INTEGER(1),
    },
    createdBy: {
        type: DataTypes.UUID,
    },
    updatedBy: {
        type: DataTypes.UUID,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
})
User.hasMany(Form);
Form.belongsTo(User);
User.hasMany(Employee);
Employee.belongsTo(User);
User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

module.exports = User;