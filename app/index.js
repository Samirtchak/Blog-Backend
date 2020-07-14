const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoConnection = require("./config/db");
const signup = require("./routes/user"); //signup route
const login = require("./routes/login"); //login route
const article = require("./routes/article"); //article route
const get_all_article = require("./routes/getallarticle"); //get all articles route
const get_article_by_id = require("./routes/getarticlebyId"); //get all article by id route
const update_article = require("./routes/updateArticle"); // update an article route



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
app.use("/article", get_article_by_id); // for get article by id feature
app.use("/article", update_article); // for update an article feature




  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });

  module.exports = app;