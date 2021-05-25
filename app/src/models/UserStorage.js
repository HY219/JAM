"use strict"

class UserStorage {
    static #users = {
        id : ["hihi", "smilsi"],
        password : ["1234", "123rs"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {   //모든 유저 데이터 받기
            if(users.hasOwnProperty(field)) {
                newUsers[field] = user[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) =>{  //idx에 해당하는 유저데이터 한번에 저장.
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        
    }
}

module.exports = UserStorage;
