const express = require('express');
const blog = require("../data/blogData");
const articleRouter = express.Router();

articleRouter.get("/", (req, res) => {
    res.send(blog);
});

articleRouter.get("/articles", (req, res) => {
    res.send(blog.articles);
});

articleRouter.get("/article/:id", (req, res) => {
    // console.log(req.params);

    const article = blog.articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send(article);
    } else {
        res.status(404).send("The selected article is no longer available!");
    }
});

articleRouter.post("/articles", (req, res) => {
    // console.log(req.body);

    const newArticle = {
        id: blog.articles.length + 1,
        title: req.body.title,
        summary: req.body.summary,
        subtitle: req.body.subtitle,
        text: req.body.text,
        //image: req.body.image,
        //authorID: req.body.authorID,
        //tags
        publishedDate: req.body.publishedDate,
    };

    blog.articles.push(newArticle);

    res.status(201).send(newArticle);
});

articleRouter.delete("/article/:id", (req, res) => {

    const targetArticle = blog.articles.find(
        (article) => article.id === Number(req.params.id)
    );

    if (!targetArticle) {
        return res.status(404).send("I could not find the article!");
    }

    const targetIndex = blog.articles.indexOf(targetArticle);
    blog.articles.splice(targetIndex, 1);

    res.send(targetArticle);
});

articleRouter.patch("/article/:id", (req, res) => {
    
    const targetArticle = blog.articles.find(
        (article) => article.id === Number(req.params.id)
    );

    if (!targetArticle) {
        return res.status(404).send("I could not find the article!");
    }

    targetArticle[req.body.property] = req.body.value;

    res.send(targetArticle);
});

module.exports = articleRouter;