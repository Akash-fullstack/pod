const express = require('express');
require('./config/config');

const app = express();

app.use(express.json())
require("dotenv").config();
const {PORT}=process.env 

app.use('/api',require('./routes/signup.routes'))

// app.post('/signup',(req,res)=>{
//     res.send("ok")
// })


app.listen(PORT,function(){
    console.log("server is Ready");
});

















