"use strict";
//                                     🚀 Day 24 Challenge: Start Coding! 🚀
//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Global variable, accessible anywhere
let globalscope = "I am a global scope variable";
const globalScope = "I am also a global scope variable";
function Block() {
    // Block-scoped variables
    let blockscope = "I am a block scope variable";
    const blockScope = "I am also block scope";
    console.log(blockscope); // Accessible inside the block
    console.log(globalscope); // Global variable accessible here
}
// Uncommenting these will cause errors
// console.log(blockscope); // Error: blockscope is not defined
// console.log(blockScope); // Error: blockScope is not defined
console.log(globalScope); // Accessible outside the block
//let and const restrict variables to their block scope
