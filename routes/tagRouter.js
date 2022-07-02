const express = require('express');
const db = require("../database/client");
const tagRouter = express.Router();

tagRouter.get("/tags", (req, res) => {
    db.query("SELECT * FROM tags;")
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message))
})

tagRouter.get("/tags/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM tags WHERE id = $1", [id])
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = tagRouter;