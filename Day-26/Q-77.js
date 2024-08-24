"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define function which greet a user by name.
// if no name is provided it greets default value given in parameter
function Defaultparam(name = "Shiraz") {
    //return a greet message to user
    return `Hello ${name} how are you!`;
}
//log the result with name and without name
console.log(Defaultparam("Ali")); //output: Ali
console.log(Defaultparam()); //output: Shiraz
//this is called default parameter which we give in parameter.
//if user dont give name in function calling so default value print
