const { Router } = require('express');
const upload = require('../middlewares/multer');
const route = Router();

route.post('/',upload.array('qrcodes'),async (req, res)=>{
        
})

module.exports = route;