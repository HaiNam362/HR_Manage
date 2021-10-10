const { Sequelize, DataTypes } = require('sequelize');
const sequelizeDB = require('../config/database');
const { v1: uuidv1 } = require('uuid')
const FormDetail = require('../models/formDetail.models')

const Form = sequelizeDB.define('Form', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv1(),
        allowNull: false,
        primaryKey: true
    },
    receiver: {
        type: DataTypes.STRING(200),
    },
    type: {
        type: DataTypes.INTEGER,
    },
    // userID:{
    //     type: DataTypes.UUID,
    //     allowNull:false,
    // },
    status: {
        type: DataTypes.STRING(36),
    },
    dueDate: {
        type: DataTypes.DATE,
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
    },
})
Form.hasOne(FormDetail);
FormDetail.belongsTo(Form);

module.exports = Form;