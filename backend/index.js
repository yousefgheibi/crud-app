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
  port: 3306
});

// check database connection

db.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log('database connect ....');
});



// get all data 
app.get('/user', (req, res) => {
  let qry = 'select * from user';

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.length > 0) {
      res.send({
        message: 'all user data.',
        data: result
      })
    }
  });
})


// get single user
app.get('/user/:id', (req, res) => {
  let gId = req.params.id;

  let qry = `select * from user where id=${gId}`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send({
        message: 'get single data.',
        data: result
      })

    }
    else {
      res.send({
        message: 'data not found.'
      })
    }
  })

})



// create data 

app.post('/user', (req, res) => {
  let fullname = req.body.fullname;
  let email = req.body.email;
  let mobile = req.baseUrl.mobile;


  let qry = `insert into user(fullname,email,mobile) values ('${fullname}','${email}','${mobile}')`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: 'data inserted.'
    })

  })

});


// update single data 
app.put("/user/:id", (req, res) => {
  let gId = req.params.id;
  let fullname = req.body.fullname;
  let email = req.body.email;
  let mobile = req.body.mobile;


  let qry = `update user set fullname = '${fullname}', email= '${email}', mobile = '${mobile}' where id = '${gId}'`;


  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: 'data updated'
    })
  });

})



// delete single data 
app.delete('/user', (req, res) => {
  let gId = reg.params.id;

  let qry = `delete from user where id='${gId}' `;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: 'data deleted.'
    })

  })
})



app.listen(3000, () => {
  console.log("server is running");
});