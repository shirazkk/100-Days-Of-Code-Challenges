//             🚀 Day 24 Challenge: Start Coding! 🚀
//Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

// Define a function with a for loop using let,
// restricting 'i' to the loop block.
function loopWithLet() {
  for (let i = 1; i <= 5; i++) {
    console.log(i); // Prints numbers 1 to 5
  }
  // Error: 'i' is not accessible outside the loop
  // console.log(i);
}
loopWithLet();
