//              🚀 Day 25 Challenge: Start Coding! 🚀
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Function to swap the values of two variables
function swapValues() {
  let firstValue = 5; // Initialize firstValue with 5
  console.log(`Initial value of firstValue=${firstValue}`); // Log initial value of firstValue

  let secondValue = 10; // Initialize secondValue with 10
  console.log(`Initial value of secondValue=${secondValue}`); // Log initial value of secondValue

  let temp = firstValue; // Temporarily store firstValue in temp
  firstValue = secondValue; // Swap value of firstValue to secondValue
  secondValue = temp; // Swap value of secondValue to temp

  console.log(
    `Swapped values: firstValue=${firstValue}, secondValue=${secondValue}`
  ); // Log swapped values
}

swapValues();
