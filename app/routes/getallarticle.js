const express = require('express');
const Article = require('../model/Article')
const router = express.Router();


 router.get('/',
  async (req,res) => {
    try {
        const article = await Article.find({})
        if(!article) {
            return res.status(400).json({message:"no article found"})
        }
        else {
           res.status(200).json(article)
        }

} catch(e) {
    console.log(err.message);
    res.status(500).send("Error while finding articles");

}

 } )

 module.exports = router;