const express = require('express');
const Article = require('../model/Article')
const router = express.Router();


 router.get('/:article_id',
  async (req,res) => {
    try {
        const article_id = req.params.article_id
        const article = await Article.findOne({_id:article_id})
        if(!article) {
            return res.status(400).json({message:"no article found"})
        }
        else {
           res.status(200).json(article)
        }

} catch(e) {
    console.log(err.message);
    res.status(500).send("Error while finding the article");

}

 } )

 module.exports = router;