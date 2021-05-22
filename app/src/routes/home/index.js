"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.login);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

router.get("/signup", ctrl.output.signup);
router.post("/signup", ctrl.process.signup);


module.exports = router;