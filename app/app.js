"use strict";
//모듈
const express = require("express");
const app = express();

const PORT = 3000;
//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
