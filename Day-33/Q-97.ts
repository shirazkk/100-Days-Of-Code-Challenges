//             🚀 Day 33 Challenge: Start Coding! 🚀

// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Function to get the current date in "DD-MM-YYYY" format
function currentDate() {
  // Create a Date object
  const date = new Date();
  // Get the day, formatted to two digits
  let currentday = date.getDate().toString().padStart(2, "0");
  // Get the month, formatted to two digits (month is zero-based)
  let currentmonth = (date.getMonth() + 1).toString().padStart(2, "0");
  // Get the full year
  let currentYear = date.getFullYear();
  // Return the date in "DD-MM-YYYY" format
  return `${currentday}-${currentmonth}-${currentYear}`;
}

console.log(currentDate());
