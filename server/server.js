const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'../public/');


app.use(express.static(publicPath));
// or
app.get('/',(req,res,next)=>{
    res.sendFile(publicPath + 'index.html');
});





const Port = process.env.PORT || 3000;
app.listen(Port,()=>{
    console.log(`Currently on ${Port}`);
});