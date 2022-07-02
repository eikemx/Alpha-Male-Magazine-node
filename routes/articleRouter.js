const express = require("express");
const db = require("../database/client");
const articleRouter = express.Router();

// GET all articles

articleRouter.get("/articles", (req, res) => {
  db.query("SELECT * FROM articles ORDER BY id ASC;")
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message));
});

// GET single article and author name

articleRouter.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    `
    SELECT 
        ar.id AS article_id,
        ar.title,
        ar.summary,
        ar.subtitle,
        ar.text,
        ar.image,
        ar.publishedDate,
        au.id AS author_id,
        au.first_name, 
        au.last_name
    FROM
    articles ar
    LEFT JOIN
    authors au
    ON au.id = ar.authorid
    WHERE ar.id = $1
    `,
    [id]
  )
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).send("This article does not exist");
      }
      res.json(data.rows[0]);
    })
    .catch((error) => res.status(500).send(error.message));
});

// CREATE article

articleRouter.post("/articles", (req, res) => {
  const { title, summary, subtitle, text, image, authorId, publishedDate } = req.body;
  const createArticle = {
    text: `INSERT INTO 
            articles
                (title, summary, subtitle, text, image, authorId, publishedDate)
            VALUES  
            ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
            `,
    values: [title, summary, subtitle, text, image, authorId, publishedDate],
  };
  db.query(createArticle)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message));
});

// UPDATE article

articleRouter.put("/articles/:id", (req, res) => {
  const { id } = req.params;
  const { title, summary, subtitle, text, publishedDate } = req.body;
  const updateOneArticle = {
    text: `UPDATE articles
        SET
            title = $1,
            summary = $2,
            subtitle = $3,
            text = $4,
            publishedDate = $5
            WHERE
                id = $6
                RETURNING *
                `,
    values: [title, summary, subtitle, text, publishedDate, id],
  };
  db.query(updateOneArticle)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message));
});

// DELETE one article

articleRouter.delete("/articles/:id", (req, res) => {
  const { id } = req.params;
  const deleteOneArticle = {
    text: `DELETE FROM articles WHERE id = $1 RETURNING *`,
    values: [id],
  };
  db.query(deleteOneArticle)
    .then((data) => res.json(data.rows))
    .catch((error) => res.tatus(500).send(error.message));
});

module.exports = articleRouter;

// articleRouter.get("/", (req, res) => {
//     res.send(blog);
// });

// articleRouter.get("/articles", (req, res) => {
//     res.send(blog.articles);
// });

// articleRouter.get("/article/:id", (req, res) => {

//     const article = blog.articles.find((article) => article.id === Number(req.params.id));

//     if (article) {
//         res.send(article);
//     } else {
//         res.status(404).send("The selected article is no longer available!");
//     }
// });

// articleRouter.post("/articles", (req, res) => {
//     // console.log(req.body);

//     const newArticle = {
//         id: blog.articles.length + 1,
//         title: req.body.title,
//         summary: req.body.summary,
//         subtitle: req.body.subtitle,
//         text: req.body.text,
//         //image: req.body.image,
//         //authorID: req.body.authorID,
//         //tags
//         publishedDate: req.body.publishedDate,
//     };

//     blog.articles.push(newArticle);

//     res.status(201).send(newArticle);
// });

// articleRouter.delete("/article/:id", (req, res) => {

//     const targetArticle = blog.articles.find(
//         (article) => article.id === Number(req.params.id)
//     );

//     if (!targetArticle) {
//         return res.status(404).send("I could not find the article!");
//     }

//     const targetIndex = blog.articles.indexOf(targetArticle);
//     blog.articles.splice(targetIndex, 1);

//     res.send(targetArticle);
// });

// articleRouter.patch("/article/:id", (req, res) => {

//     const targetArticle = blog.articles.find(
//         (article) => article.id === Number(req.params.id)
//     );

//     if (!targetArticle) {
//         return res.status(404).send("I could not find the article!");
//     }

//     targetArticle[req.body.property] = req.body.value;

//     res.send(targetArticle);
// });
