// index.js
const express = require("express");
const router = require("./routes/user");

const app = express();
const { connectMongoDB } = require("./connection"); // Corrected import
const { middleware } = require("./middlewares/index");

const port = 8000;

//connection 
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1"); // Corrected function call

//middleware - plugin
app.use(middleware("log.txt"));

app.use(express.urlencoded({ extended: false }));
 
//routes
app.use("/users", router); // Use "/user" instead of "/api/users"

app.listen(port, () => {
  console.log("Server started");
});
