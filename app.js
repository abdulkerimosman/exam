const express = require('express');
const db_connect = require('./db/mysql_connect');

const app = express();
const port = 5000;
app.get('/',(req,res)=>{
  res.json({
    message:"Welcome!"
  })
})
app.listen(port,()=>{
  console.log(`Sunucu ${port} is working`)
})