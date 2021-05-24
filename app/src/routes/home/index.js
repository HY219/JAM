"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

//로그인 창
router.get("/", ctrl.output.login);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

//회원가입 창
router.get("/signup", ctrl.output.signup);
router.post("/signup", ctrl.process.signup);

//공지사항 창
router.get("/notice", ctrl.output.notice);
router.get("/notice_list", ctrl.output.notice_list);

//팀빌딩 창

module.exports = router;