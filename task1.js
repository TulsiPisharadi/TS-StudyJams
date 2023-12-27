"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerUser(name, birthYear) {
    var value = checkAge(birthYear);
    if (value) {
        console.log("The User name is :", name);
        console.log("Thebirthyear is:", birthYear);
        console.log("User Registration Success !");
    }
    else {
        console.log("User Registration failed ");
    }
}
function checkAge(birthYear) {
    var year = 2023;
    var age = year - birthYear;
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
registerUser("tulsi", 2004);
