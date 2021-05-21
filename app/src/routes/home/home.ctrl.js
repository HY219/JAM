"use strict";

const home = (req, res) =>{
    res.render("home/index");
};

const signup = (req, res) => {
    res.render("home/signup");
};

module.exports = {
    home,
    signup,
};