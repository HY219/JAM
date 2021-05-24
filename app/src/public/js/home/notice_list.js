"use strict";

const categoryBtn = new Array(document.querySelector("#SW"), document.querySelector("#Language"),document.querySelector("#Social"),
document.querySelector("#Job"), document.querySelector("#Starup"),document.querySelector("#Supporters"),document.querySelector("#Competition"),
document.querySelector("#Scholarship"),document.querySelector("#Volunteer"), document.querySelector("#etc"));


categoryBtn.addEventListener("click", signup);


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
