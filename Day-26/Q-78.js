"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function Declaration
//we make this function using function keyword 
//this is hoisted mean we can call it before its declartion
function decalrefunc(num1, num2) {
    return num1 * num2; //return product of two number
}
console.log(decalrefunc(2, 8)); //result:16
//function Expression 
//we make this function using let,const keyword
//this function is not hoisted its mean we can't we use it before its declartion.
let funcExpression = (num1, num2) => {
    return num1 * num2;
};
console.log(funcExpression(2, 3)); //result:6
