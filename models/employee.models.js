const {Sequelize, DataTypes} = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')

const Employee = sequelizeDB.define('Employee',{
    id :{
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    lastName:{
        type: DataTypes.STRING(200),
    },
    fullName:{
        type: DataTypes.STRING(200),
    },
    // userID:{
    //     type: DataTypes.UUID,
    //     allowNull:false,
    // },
    managerID:{
        type: DataTypes.STRING(200),
        
    },
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
    },
});

module.exports = Employee;