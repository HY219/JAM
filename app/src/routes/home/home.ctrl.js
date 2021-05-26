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
        console.log({ post : response, category : category});
        res.render("home/notice_list",{ post : response, category : category});
    },

    notice_content : async (req, res) =>{
        const num = req.query.num;
        const category = req.query.category;
        const response = await Contents.getContent(num);
        const board = await Contents.getteamContent(num);
        res.render("home/notice_content",
        {notice_content : response,
        team_list : board,
        category : category});
    },

    team_main : (req, res) =>{
        res.render("home/team_main");
    },

    team_write : async (req, res) =>{
        if(Object.keys(req.query).length === 0){
            res.render("home/team_write");
        }
        else{
            const originnum = req.query.num;
            const category = req.query.category;
            res.render("home/team_write",{originnum : originnum, category : category});
        } 
    },
    
    team_content : (req, res) =>{
        res.render("home/team_content");
    },
    
    usersetting : (req, res) =>{
        res.render("home/usersetting");
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

    team_write : async (req, res) =>{
        const user = new User(req.body);
        const response = await user.signup();
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};