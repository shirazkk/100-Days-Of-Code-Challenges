//             🚀 Day 32 Challenge: Start Coding! 🚀
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Create an array of numbers to reduce to a single value
let arrayOfNums: number[] = [2, 4, 6, 8, 10];

// Use reduce to sum all numbers in the array
// The initialValue is 0, so the accumulation starts from 0
let sum = arrayOfNums.reduce((a, b) => a + b, 0);

// Print the original array
console.log(arrayOfNums); // Output: [2, 4, 6, 8, 10]

// Print the reduced value (sum of all numbers in the array)
console.log(sum); // Output: 30
