const express= require("express");
const router = express.Router();
const Article = require('../model/Article');

router.delete('/delete/:article_id',
    async (req,res) => {
        try {
            const article_id = req.params.article_id;
            const article = Article.findOne({_id:article_id}) 
            if(!article) {
                res.status(400).send({message:"No article to delete was find"})
            } else {
                Article.findOneAndRemove({_id:article_id});
                res.status(200).send({
                    message:"article successfully deleted",
                });
            }

        } catch(e) {
            console.log(e);
            return res.status(500).send("error during delete operation");
        }
    }

)

module.exports = router;