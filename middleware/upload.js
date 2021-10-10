const util = require('util');
const multer = require('multer');
const path = require('path');
const maxSize = 2 * 1024 * 1024;


// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, __basedir + "/app/middleware/upload/");
//     },
//     filename: (req, file, cb) => {
//         console.log(file.originalname);
//         cb(null, file.originalname);
//     },
// });
// // max size anh
// let uploadFile = multer({
//     storage: storage,
//     limits: { fileSize: maxSize },
// }).single("file");

// let uploadFileMiddleware = util.promisify(uploadFile);
// module.exports = uploadFileMiddleware;

const { mkdirSync, deleFIle } = require("./file_image")
const pathdir = path.resolve(__dirname,"../../")

mkdirSync(pathdir+"/uploads")

var imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.png') //Appending .jpg
  }
})

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
module.exports = { 
    uploadSingle: imageUpload.single('image'),
    UploadMultil :imageUpload.array('images')
  
  }