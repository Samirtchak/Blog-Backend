# Blog-Backend
This is a blog backend i build for fun using Node js,Express,MongoDB and Mongoose.

[![Build Status](https://travis-ci.com/Samirtchak/Blog-Backend.svg?branch=master)](https://travis-ci.com/Samirtchak/Blog-Backend)

 Endpoints     | HTTP Verbs           | Descriptions          |
| :---         |     :---:      |          ---:        |
| /user/signup | POST           | Create a new user    |
| /user/login  | POST           | User login           |
| /article/create/:id  | POST   | Create an article    |
| /article/  | GET   | Get all articles    |
| /article/update/:article_id  | PUT   | Update an article    |
| /article/:article_id  | GET   | Get article by id    |
| /article/comment/:article_id  | PUT   |  Comment an article    |
| /article/delete/:article_id  | DELETE   | Delete an article    |
