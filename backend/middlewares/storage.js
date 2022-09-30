const multer = require("multer");

module.exports = (
    multer.diskStorage({
        destination:(req, file, cb)=>{
            if(file.fieldname == 'qrcodes') cb(null, './public');
        },
        filename:(req, file, cb)=>cb(null, file.originalname)
    })
);