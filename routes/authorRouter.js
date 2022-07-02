const express = require('express');
const db = require("../database/client");
const authorRouter = express.Router();

// GET all authors

authorRouter.get("/authors", (req,res) => {
    db.query(`SELECT * FROM authors ORDER BY id ASC;`)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message))
})

// GET one author

authorRouter.get("/authors/:id", (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM authors WHERE id = $1`, [id],)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message))
})


// CREATE author

authorRouter.post("/authors", (req, res) => {
    const { first_name, last_name, image, birth_date, bio } = req.body;
    const createAuthor = {
        text: `INSERT INTO
            authors
                (first_name, last_name, image, birth_date, bio)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
                `,
            values: [first_name, last_name, image, birth_date, bio],
    }
    db.query(createAuthor)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message))
})

// DELETE author

authorRouter.delete("/authors/:id", (req, res) => {
    const { id } = req.params;
    const deleteOneAuthor = {
        text: `DELETE FROM authors WHERE id = $1 RETURNING *`, 
        values: [id],
    }
    db.query(deleteOneAuthor)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message))
})

// UPDATE author

authorRouter.put("/authors/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, image, birth_date, bio } = req.body;
    const updateOneAuthor = {
        text: `UPDATE authors
        SET
        first_name = $1,
        last_name = $2, 
        image = $3,
        birth_date = $4, 
        bio = $5
        WHERE 
            id = $6
            RETURNING *
        `,
    values: [first_name, last_name, image, birth_date, bio, id],
    }
    db.query(updateOneAuthor)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message))
})

module.exports = authorRouter;


// authorRouter.get("/", (req, res) => {
//     res.send(blog);
// });

// authorRouter.get("/authors", (req, res) => {
//     res.send(blog.authors);
// });

// authorRouter.get("/author/:id", (req, res) => {
//     // console.log(req.params);

//     const author = blog.authors.find((author) => author.id === Number(req.params.id));

//     if (author) {
//         res.send(author);
//     } else {
//         res.status(404).send("The selected author is no longer available!");
//     }
// });

// authorRouter.post("/authors", (req, res) => {

//     const newAuthor = {
//         id: blog.authors.length + 1,
//         firstName: req.body.firstName,
//         lastName: req. body.lastName,
//         //image: req.body.image,
//         birthDate: req.body.birthDate,
//         bio: req.body.bio,
//         //long: req.body.long,
//         //lat: req.body.lat,
//     };

//     blog.authors.push(newAuthor);

//     res.status(201).send(newAuthor);
// });

// authorRouter.delete("/author/:id", (req, res) => {
    
//     const targetAuthor = blog.authors.find(
//         (author) => author.id === Number(req.params.id)
//     );

//     if (!targetAuthor) {
//         return res.status(404).send("I could not find the author!");
//     }

//     const targetIndex = blog.authors.indexOf(targetAuthor);
//     blog.authors.splice(targetIndex, 1);

//     res.send(targetAuthor);
// });

// authorRouter.patch("/author/:id", (req, res) => {
    
//     const targetAuthor = blog.authors.find(
//         (author) => author.id === Number(req.params.id)
//     );

//     if (!targetAuthor) {
//         return res.status(404).send("I could not find the author!");
//     }

//     targetAuthor[req.body.property] = req.body.value;

//     res.send(targetAuthor);
// });

