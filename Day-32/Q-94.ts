//            🚀 Day 32 Challenge: Start Coding! 🚀
//Question 94: Use the .map() method to create a new array that contains the length
//of each word from an array of words.

// Define an array of usernames
let usernames: string[] = ["Shiraz", "Furqan", "Qasim", "Ali"];

// Use the .map() method to create a new array containing the length of each username
let newarray = usernames.map((value) => value.length);

// Print the original array of usernames
console.log(usernames);

// Print the new array with lengths of each username
console.log(newarray);
