const express = require('express');
const db = require("../database/client");
const tagRouter = express.Router();

tagRouter.get("/tags", (req, res) => {
    db.query("SELECT * FROM tags;")
    .then((data) => res.json(data.rows))
    .catch((error) => res.sendStatus(500))
})

tagRouter.get("/tags/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM tags WHERE id = $1", [id])
    .then((data) => res.json(data.rows))
    .catch((error) => res.sendStatus(500));
});

module.exports = tagRouter;