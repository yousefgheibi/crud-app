const express = require("express");
const bodyParser = require("body-parser");
// const cros = require("cros");
const mysql = require("mysql2");


const app = express();

// app.use(cros());
app.use(bodyParser.json());


// database connerction 

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'simpledb',
   port:3306
}); 

// check database connection

db.connect(err=>{
  if(err){
    console.log(err);
  }
  console.log('database connect ....');
});

app.listen(3000, () => {
  console.log("server is running");
});
  


