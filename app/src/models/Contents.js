"use strict"

const db = require("../config/db");

class Contents{
    static getContentByCategory(category){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM notice WHERE "+category+"= 1 ORDER BY num DESC LIMIT 0,12;";
            db.query(query,
                (err, results)=>{
                if(err) reject(`${err}`);
                resolve(results);
            });
        });
    }

    static getContent(num){
        db.query("UPDATE notice SET views = views+1 WHERE num = ?",[num]);
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM notice WHERE num = ?;";
            db.query(query,
                [num],
                (err, results)=>{
                if(err) reject(`${err}`);
                resolve(results);
            });
        });
    }

    static getteamContent(num){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM teambuild WHERE notice_num = ? ORDER BY num DESC LIMIT 0, 1000;";
            db.query(query,
                [num],
                (err, results)=>{
                if(err) reject(`${err}`);
                resolve(results);
            });
        });
    }
    /*static writeContent(data){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO TBboard"
        })
    }*/
}

module.exports = Contents;