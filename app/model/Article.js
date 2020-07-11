const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    comments: [
        { body: String,
           date: Date 
        }
    ],
    date: { 
        type: Date, default: Date.now 
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Article',articleSchema);
