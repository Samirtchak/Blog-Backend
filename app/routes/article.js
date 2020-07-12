const express = require('express');
const { check, validationResult} = require("express-validator");
const User = require('../model/User');
const Article = require('../model/Article')
const router = express.Router();


 router.post('/create/:id',[
    check("title", "Please Enter a title")
    .not()
    .isEmpty(),
    check("body", "Please Enter a text")
    .not()
    .isEmpty(),

 ], async (req,res) => {

    const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
             errors: errors.array()
             });
         }
    const id = req.params.id
    const {title,body} = req.body;
    try {
        const user = await User.findOne({_id:id})
        if(!user) {
            return res.status(400).json({message:"user don't exist"})
        }
        else {
            const article = new Article ({
                title,
                body,
                user:id
            })
            
           await article.save()
        
           res.status(200).json({message:"successful creation"})

        }

} catch(e) {
    console.log(err.message);
    res.status(500).send("Error in Saving article");

}

 } )

 module.exports = router;