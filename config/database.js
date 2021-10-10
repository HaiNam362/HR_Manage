const { Sequelize } = require('sequelize');





const sequelizeDB = new Sequelize('project_gd3', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = sequelizeDB;
const Form = require('../models/form.models')
const User = require('../models/user.models')
const UserRole = require('../models/userRole.models')
const Role = require('../models/role.models')
const Role_permission = require('../models/role_permission.models')
const FormDetail = require('../models/formDetail.models')
const Employee = require('../models/employee.models.js')
const Api = require('../models/api.models')

 
sequelizeDB.authenticate()
  .then(() => {
  
    console.log('Connect server successfully ');
    return sequelizeDB.sync({ force: false }).then((sequelize) => {
      return sequelize
    })
  }).catch((err) => {
    console.log(err);
  })


