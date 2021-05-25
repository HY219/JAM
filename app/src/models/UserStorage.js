"use strict"

const db = require("../config/db");

class UserStorage {

    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM user WHERE id = ?;";
            db.query(query,
                [id], 
                (err, data) =>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO user(id, password, username, email, phone) VALUES(?,?,?,?,?)";
            db.query(query,
                [userInfo.id, userInfo.password, userInfo.username, userInfo.email, userInfo.phone], 
                (err) =>{
                if(err) reject(`${err}`);
                resolve({success : true});
            });
        });
    }
}

module.exports = UserStorage;
