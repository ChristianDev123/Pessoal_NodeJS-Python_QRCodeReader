const express = require('express');
const path = require('path');
const cors = require('cors')();
const router = require('./router');
const app = express();
const port = 3800;

app.use(express.json());
app.use('/', express.static(path.resolve('../public')));
app.use((req,res,next)=>{
    res.header("Access-Controll-Allow-Origin","*");
    res.header("Access-Controll-Allow-Headers","Origin, X-requested-With, Content-Type, Accept");
    res.setHeader("Access-Controll-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
    app.use(cors);
    next();
});
app.use(router);
app.listen(port,()=>{
    console.log(`Serve running on ${port} port!`);
});