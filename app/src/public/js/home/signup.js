"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const signupBtn = document.querySelector("button");


signupBtn.addEventListener("click", signup);


function signup(){
    const req = {
        id : id.value,
        password : password.value,
    };

    fetch("/signup", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    });
}
