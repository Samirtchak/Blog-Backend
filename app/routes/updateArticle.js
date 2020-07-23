const express = require('express');
const Article = require('../model/Article')
const router = express.Router();


 router.put('/update/:article_id',
  async (req,res) => {
    try {
        const article_id = req.params.article_id
        const {title,body} = req.body
        const article = await Article.findOne({_id:article_id})
        if(!article) {
            return res.status(400).json({message:"no article found"})
        }
        else {
            article.title = title;
            article.body = body;
            article.date = Date.now();
            article.__v +=1;
            article.save()
            res.status(200).json(article)
            
        }

} catch(e) {
    console.log(err.message);
    res.status(500).send("Error while finding the article");

}

 } )

 module.exports = router;