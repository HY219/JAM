"use strict";

const User = require("../../models/User");
const Contents = require("../../models/Contents");

function makeurl(data, i){
    var url = document.getElementsByid("content");
    url.href = "/notice/content?num="+data[i].num;
}
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
    
    notice_list : async (req, res) =>{
        const category = req.query.category;
        const response = await Contents.getContentByCategory(category);
        res.render("home/notice_list",{ post : response});
    },

    notice_content : async (req, res) =>{
        const num = req.query.num;
        const response = await Contents.getContent(num);
        const board = await Contents.getteamContent(num);
        res.render("home/notice_content",
        {notice_content : response,
        team_list : board,
        makeurl : makeurl});
    },

    usersetting : (req, res) =>{
        res.render("home/usersetting");
    },

    team_main : (req, res) =>{
        res.render("home/team_main");
    },

    team_write : (req, res) =>{
        res.render("home/team_write");
    },
    
    team_content : (req, res) =>{
        res.render("home/team_content");
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