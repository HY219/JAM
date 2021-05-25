"use strict";

const User = require("../../models/User");


const output = {
    login : (req, res) =>{
        res.render("home/index");
    },
    
    signup : (req, res) => {
        res.render("home/signup");
    },

    notice : (req, res) =>{
        res.render("home/notice_main");
    },
    notice_list : (req, res) =>{
        res.render("home/notice_list");
    },
};

const process = {
    login : async (req, res) =>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    signup: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.signup();
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};