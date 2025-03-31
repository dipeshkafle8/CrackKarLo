const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const { user } = require("./routes/user.route");
const { course } = require("./routes/course.route");
require("dotenv").config();
//connect to the mongodb
connectDB();

const app = express();
app.use(cors({
  origin:"*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", user);
app.use("/api/course", course);

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running sucessfully at ${port}`);
});
