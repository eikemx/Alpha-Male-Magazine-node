const express = require("express");
const cors = require("cors");
const authorRouter = require("./routes/authorRouter");
const articleRouter = require("./routes/articleRouter");
const tagRouter = require("./routes/tagRouter");
require("dotenv").config();
const app = express();

const allowedOrigins = [
  "https://alpha-male-mag.netlify.app",
  "http://localhost:3000",
  "http://localhost:5173", // Adding Vite's default port just in case
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

// Apply CORS with options - only once!
app.use(cors(corsOptions));

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
