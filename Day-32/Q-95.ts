//             🚀 Day 32 Challenge: Start Coding! 🚀
//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Define a function to filter numbers greater than 10 from an array
function arrayOfnumber(nums: number[]) {
  // Use the filter method to iterate over each number in the array
  let checkcondition = nums.filter((val) => {
    // Return true for values greater than 10, which includes them in the new array
    return val > 10;
  });

  // Log the array of numbers greater than 10 to the console
  console.log(checkcondition);
}

// Call the function with an example array to see the result
arrayOfnumber([1, 4, 88, 12, 3, 11, 18, 6, 9]);
