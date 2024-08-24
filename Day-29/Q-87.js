"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function in which it extract only given characters
function extractSubstring(str) {
    //return 0 to 10 characters from sentence
    return str.substring(0, 10);
}
//prinit only characters from 0 to 10 
console.log(extractSubstring("My name is Shiraz Ali")); //output:My name is
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 10); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript world!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.
