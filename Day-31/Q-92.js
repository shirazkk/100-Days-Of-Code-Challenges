"use strict";
//                                    🚀 Day 31 Challenge: Start Coding! 🚀
//Question 92: Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function which return a removed element of array
function removeArrayElement(arr) {
    return arr.pop(); //pop() method is use for removing last element
}
console.log(removeArrayElement(["A", "B", "C", "D", "E"])); //output: E
