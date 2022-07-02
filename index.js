const express = require('express');
const cors = require('cors');
const authorRouter = require("./routes/authorRouter");
const articleRouter = require("./routes/articleRouter");
const tagRouter = require("./routes/tagRouter");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors()); // set up a CORS policy
app.use("/api/alpha", authorRouter, articleRouter, tagRouter);

app.get("/", (req, res) => {
    res.send('Welcome to the Alpha Male Server!') 
});

app.get("*", (req, res) => {
    res.redirect("/");
});


const port = process.env.PORT || 3013;
app.set('port', port);

app.listen(port, () => {
    console.log(`App is listening to Port ${port}`)
});