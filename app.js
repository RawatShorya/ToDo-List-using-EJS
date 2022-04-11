const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");
