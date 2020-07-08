const mongoose = require("mongoose");

const URI = 'mongodb+srv://samir:quelafamille@sam-q8erk.mongodb.net/Blog?retryWrites=true&w=majority';

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