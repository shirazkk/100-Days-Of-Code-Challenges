"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//define a function in which we convert string into uppercase and lowercase
function cases(name) {
    //convert string in uppercase
    let touppercase = name.toUpperCase();
    //convert string in lowercase
    let tolowercase = name.toLowerCase();
    console.log(`In UpperCase:${touppercase}`); //output: SHIRAZ
    console.log(`In lowercase:${tolowercase}`); //output: shiraz
}
cases("ShIrAz");