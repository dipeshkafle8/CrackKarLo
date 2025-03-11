const express = require("express");
const { connectDB } = require("./config/db");
const { user } = require("./routes/userRoute");
require("dotenv").config();
//connect to the mongodb
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", user);

app.get("/", (req, res) => {
  res.json({ msg: "Incoming Request" });
});

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running sucessfully at ${port}`);
});
