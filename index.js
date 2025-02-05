const express = require("express");
const cors = require("cors");
const authorRouter = require("./routes/authorRouter");
const articleRouter = require("./routes/articleRouter");
const tagRouter = require("./routes/tagRouter");
require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: ["https://alpha-male-mag.netlify.app", "http://localhost:3000"], // Your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/alpha", authorRouter, articleRouter, tagRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Alpha Male Server!");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 3013;
app.set("port", port);

app.listen(port, () => {
  console.log(`App is listening to Port ${port}`);
});
