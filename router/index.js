const { Router} = require('express');
const upload = require('../middlewares/multer');
const route = Router();
const path = require('path');
const { spawn } = require('child_process');

route.post('/',upload.array('qrcodes'),async (req, res)=>{
    try{
        const qrcodes = req.files;
        const jsons = [];
        qrcodes.forEach((item)=>{
            const process = spawn('python', [`index.py`, item.filename], {
                cwd:path.resolve(__dirname, '../controller')
            });
            process.stdout.on('data',(response)=>jsons.push(JSON.parse(response.toString())));
        })
        setTimeout(()=>{
            const codes = jsons.map(({msg})=>msg);
            res.status(200).json({msg:'Qrcodes readed!', codes})
        },250*qrcodes.length)
    }catch(error){
        if(error) console.log(error);
        res.status(500).json({msg:"[ERROR] Can't read the qrcodes"});
    }
})

module.exports = route;