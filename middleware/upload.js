const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uploadFile = path.resolve(path.join(__dirname, '../public/uploads'));

if (!fs.existsSync(uploadFile)) {
  fs.mkdirSync(uploadFile, { recursive: true });
}
const storage = multer.diskStorage({ 
  destination: function(req,file,cb){
    cb(null,path.join(__dirname,'../public/uploads'));
  },
  filename: function(req,file,cb){
    cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname);
  }
})
module.exports = {storage}
