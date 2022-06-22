const express = require('express');
const blog = require("../data/blogData");
const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
    res.send(blog);
});

authorRouter.get("/authors", (req, res) => {
    res.send(blog.authors);
});

authorRouter.get("/author/:id", (req, res) => {
    // console.log(req.params);

    const author = blog.authors.find((author) => author.id === Number(req.params.id));

    if (author) {
        res.send(author);
    } else {
        res.status(404).send("The selected author is no longer available!");
    }
});

authorRouter.post("/authors", (req, res) => {

    const newAuthor = {
        id: blog.authors.length + 1,
        firstName: req.body.firstName,
        lastName: req. body.lastName,
        //image: req.body.image,
        birthDate: req.body.birthDate,
        bio: req.body.bio,
        //long: req.body.long,
        //lat: req.body.lat,
    };

    blog.authors.push(newAuthor);

    res.status(201).send(newAuthor);
});

authorRouter.delete("/author/:id", (req, res) => {
    
    const targetAuthor = blog.authors.find(
        (author) => author.id === Number(req.params.id)
    );

    if (!targetAuthor) {
        return res.status(404).send("I could not find the author!");
    }

    const targetIndex = blog.authors.indexOf(targetAuthor);
    blog.authors.splice(targetIndex, 1);

    res.send(targetAuthor);
});

authorRouter.patch("/author/:id", (req, res) => {
    
    const targetAuthor = blog.authors.find(
        (author) => author.id === Number(req.params.id)
    );

    if (!targetAuthor) {
        return res.status(404).send("I could not find the author!");
    }

    targetAuthor[req.body.property] = req.body.value;

    res.send(targetAuthor);
});

module.exports = authorRouter;