const express = require("express");
const { connectDB } = require("./config/db");
require("dotenv").config();
//connect to the mongodb
connectDB();

const app = express();

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running sucessfully at ${port}`);
});
