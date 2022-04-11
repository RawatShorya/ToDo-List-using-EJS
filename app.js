const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

app.get("/", function (req, res) {});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("Server Has Started On Port 3000.");
});
