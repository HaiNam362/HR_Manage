const { Sequelize, DataTypes } = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')
const Role_permission = require('../models/role_permission.models')
const Api = require('../models/api.models')

const Role = sequelizeDB.define('Role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
    },
    description: {
        type: DataTypes.STRING(200),
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
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});
Role.belongsToMany(Api, { through: Role_permission });
Api.belongsToMany(Role, { through: Role_permission });

module.exports = Role;