
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({ 
    destination: function(req,file,cb){
        cb(null,"upload_image/movie/");
    },
    filename: function(req,file,cb){
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname,ext))
    }
}); 

const upload = multer({storage : storage});

module.exports = upload;
