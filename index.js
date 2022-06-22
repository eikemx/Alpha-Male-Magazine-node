const express = require('express');
const authorRouter = require("./routes/authorRouter");
const articleRouter = require("./routes/articleRouter");

const app = express();
app.use(express.json());
app.use("/api/alpha", authorRouter, articleRouter);

app.get("/", (req, res) => {
    res.send('Welcome to the Alpha Male Server!')
});

app.get("*", (req, res) => {
    res.redirect("/");
});


const port = process.env.PORT || 3013;

app.listen(port, () => {
    console.log(`App is listening to Port ${port}`)
});