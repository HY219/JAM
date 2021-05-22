"use strict";

const output = {
    login : (req, res) =>{
        res.render("home/index");
    },
    
    signup : (req, res) => {
        res.render("home/signup");
    }

}

const process = {
    login : (req, res) =>{
        console.log(req.body);
    },
    signup: (req, res) =>{
        console.log(req.body);
    }
}

module.exports = {
    output,
    process,
};