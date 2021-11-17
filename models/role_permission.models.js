const {Sequelize, DataTypes} = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')

const Role_permission = sequelizeDB.define('Role_permission',{
    id :{
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    // roleId:{
    //     type: DataTypes.UUID,
    //     allowNull: false,
    // },
    // apiId:{
    //     type: DataTypes.UUID,
    //     allowNull: false,
    // },
    isDeleted:{
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

module.exports = Role_permission;