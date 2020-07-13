const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoConnection = require("./config/db");
const signup = require("./routes/user"); //signup route
const login = require("./routes/login"); //login route
const article = require("./routes/article"); //article route
const get_all_article = require("./routes/getallarticle"); //get all articles route



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
app.use("/user", login); // for login feature
app.use("/article", article); // for article feature
app.use("/article", get_all_article); // for get article feature




  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });

  module.exports = app;