const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoConnection = require("./config/db");
const signup = require("./routes/user"); //signup route


// Initiate Mongo Server
InitiateMongoConnection();

const app = express();

// PORT 
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
  });

app.use("/user", signup); // for signup feature


  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });

  module.exports = app;