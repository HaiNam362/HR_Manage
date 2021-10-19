const User = require('../models/user.models')
const UserRole = require('../models/userRole.models')
const Role = require('../models/role.models')
const Role_permission = require('../models/role_permission.models')
const FormDetail = require('../models/formDetail.models')
const Form = require('../models/form.models')
const Employee = require('../models/employee.models.js')
const Api = require('../models/api.models')

    User.hasMany(Employee);
    Employee.belongsTo(User);
    
    User.belongsToMany(Role ,{ through: UserRole});
    Role.belongsToMany(User, {through: UserRole});
    
    Role.belongsToMany(Api , { through: Role_permission});
    Api.belongsToMany(Role, { through: Role_permission});

console.log("1000");




