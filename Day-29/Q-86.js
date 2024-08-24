"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to check if "Typescript" is present in the sentence
function checkTextPresence(sentence) {
    // Uses .includes() to check for the presence of "Typescript"
    return sentence.includes("Typescript");
}
// Example usage
console.log(checkTextPresence("I am currently learning Typescript from GIAIC")); // true
console.log(checkTextPresence("I am currently learning Javascript from GIAIC")); // false
