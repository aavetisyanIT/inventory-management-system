const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter");
const { requireAuth, populateUser } = require("./middleware/authMiddleware");

require("dotenv").config();

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = process.env.DB_CONNECTION_STRING;
mongoose
  .connect(dbURI)
  .then(() => app.listen(3000))
  .catch(err => console.log(err));

// routes
app.get("*", populateUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRouter);
