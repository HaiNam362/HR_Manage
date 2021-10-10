const {Sequelize, DataTypes} = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')

const FormDetail = sequelizeDB.define('FormDetail',{
    id :{
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    // formID:{
    //     type: DataTypes.UUID,
    //     allowNull:false,
    // },
    content:{
        type: DataTypes.STRING(255),
    },
    managerComment:{
        type: DataTypes.STRING(255),
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

module.exports = FormDetail;