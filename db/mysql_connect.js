const mysql = require('mysql');

let dbConn = mysql.createConnection({
  user: 'root',
  password: null,
  database: 'chatgpt2',
  host: 'localhost'  
})

dbConn.connect((err)=>{
  if(!err) {
    console.log('veritabana baglanildi');
  } else {
    console.log('veritabanina baglanilmadi')
  }
})

module.exports = dbConn;