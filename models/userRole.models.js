const {Sequelize, DataTypes} = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')

const UserRole = sequelizeDB.define('UserRole',{
    id :{
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    // userID:{
    //     type: DataTypes.UUID,
    //     allowNull:false,
    // },
    // roleID:{
    //     type: DataTypes.UUID,
    //     allowNull:false,
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

module.exports = UserRole;