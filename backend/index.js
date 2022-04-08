const express = require("express");
const bodyParser = require("body-parser");
// const cros = require("cros");

const app = express();

// app.use(cros());
app.use(bodyParser.json());




app.listen(3000, () => {
  console.log("server is running");
});
  