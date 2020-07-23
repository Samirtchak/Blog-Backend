const express = require('express');
const Article = require('../model/Article');
const router = express.Router();

router.put('/comment/:article_id',
    async(req,res) => {
        try {
            const article_id = req.params.article_id;
            const {body} = req.body;
            const comment = {body,date:Date.now()}
            const article = await Article.findOne({_id:article_id});
           if(!article) {
               return res.status(400).send({message:"no article found"})
           } else {
              article.comments.push(comment);
              article.save();
               res.status(200).json(article);
           }

        } catch(e) {
            console.log(err.message);
            res.status(500).send("Error while finding the article");
        }
    }

)

module.exports = router;