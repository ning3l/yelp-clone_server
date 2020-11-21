require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var restaurantRouter = require("./routes/restaurants");
const citiesRouter = require("./routes/cities");
const commentRouter = require("./routes/comments");
const tagRouter = require("./routes/tags");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/cities", citiesRouter);
app.use("/api/comments", commentRouter);
app.use("/api/tags", tagRouter);

module.exports = app;
