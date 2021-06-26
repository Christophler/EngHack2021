const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // set this up later 

// import routes


app.listen(3000, function () {
  console.log('API listening on port 3000')
})
