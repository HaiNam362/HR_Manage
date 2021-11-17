const {Sequelize, DataTypes} = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')

const Api = sequelizeDB.define('Api',{
    id :{
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    url:{
        type: DataTypes.STRING,
    },
    method:{
        type: DataTypes.STRING,
    },
    description: {
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

module.exports = Api;