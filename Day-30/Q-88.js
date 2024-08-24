"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Round number to nearest integer
function roundoff(num) {
    // Use Math.round to round off
    return Math.round(num);
}
// Example: 2.4 rounded to 2
console.log(roundoff(2.4)); // Output: 2
// Example: 2.8 rounded to 3
console.log(roundoff(2.8)); // Output: 3
