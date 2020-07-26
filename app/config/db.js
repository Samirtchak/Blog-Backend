const mongoose = require("mongoose");

const USERNAME = process.env.username;
const PASSWORD = process.env.password;

const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@sam-q8erk.mongodb.net/Blog?retryWrites=true&w=majority`;

const InitiateMongoConnection = async () => {
    try {
        await mongoose.connect(URI,{
            useNewUrlParser:true
        })
        console.log("Connected to the DB !!");
    } catch (e) {
        console.log(e)
        throw e;
    }
}

module.exports = InitiateMongoConnection;
