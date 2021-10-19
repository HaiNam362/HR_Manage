# f11-n12-project

# clone project

1.  Open terminal
2.  $git clone --branch namnh1 https://github.com/namnh1vmo/namnh1
3.  cd namnh1
4.  npm i

# Operations:

npm start
npm run test_auth
npm run test_user
npm run test_form

# Configuration

Check file database.js in directory config/database.js for database or other
The following is important:
+ Xampp
+ project_gd3
+ root
+ host: 'localhost'
+ dialect: 'mysql'

# PROJECT STRUCTURE:

PROJECT3
|--bin
| |--www
|
|--components
| |--req.js
| |--reqAuth.js
| |--reqUser.js
|
|--config
| |--database.js
| |--db_config.sql
|
|--controllers
| |--authController.js
| |--formController.js
| |--userController.js
|  
|--middleware
| |--auth.js
| |--errorHandler.js
| |--file_image.js
| |--SenEmail.js
| |--upload.js
| |--Validate.js
|  
|--models
| |--api.models.js
| |--employee.models.js
| |--form.models.js
| |--formDetail.models.js
| |--include.js
| |--role_permission.models.js
| |--role.models.js
| |--user.models.js
| |--userRole.js
|
|--node_module
|
|--public
| |--images
| |--javascripts
| |--stylesheets
| |--uploads
|
|--router
| |--authRouter.js
| |--formRouter.js
| |--index.js
| |--users.js
|
|--test
| |--data.js
| |--test_auth.js
| |--test_user.js
| |--test.js
|
|--utils
| |--error.log
| |--logger.js
|
|--views
| |--error.ejs
| |--index.ejs
|  
|--.env
|
|--.gitignore
|
|--app.js
|
|--package-lock.json
|
|--package.json  
|
|--README.md
