//                                    🚀 Day 31 Challenge: Start Coding! 🚀
//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replacing(arr: string[]): string[] {
  // Find the index of the element "Bananna" in the array
  const indexOfBananna = arr.indexOf("Bananna");
  // Log the index of "Bananna"
  console.log(`IndexOfBananna: ${indexOfBananna}`);
  // Replace "Bananna" with "Mango" at the found index
  arr[indexOfBananna] = "Mango";
  // Return the modified array
  return arr;
}
// Initialize the array with some fruits
const arr: string[] = ["Apple", "Peach", "Bananna"];
// Call the function and log the result
console.log(replacing(arr));
