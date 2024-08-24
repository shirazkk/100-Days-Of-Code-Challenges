"use strict";
//             🚀 Day 32 Challenge: Start Coding! 🚀
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Object.defineProperty(exports, "__esModule", { value: true });
//create a array of number to reduce it to a single value
let arrayOfNums = [2, 4, 6, 8, 10];
// Sum all numbers using reduce
let sum = arrayOfNums.reduce((a, b) => a + b, 0);
//original array
console.log(arrayOfNums);
//new array of reduced value
console.log(sum); // output: 30
