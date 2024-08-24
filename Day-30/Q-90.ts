//Function to check if a value is NaN (Not a Number)
function checkvalue(value: any): boolean {
  //convert value into number
  const convert = Number(value);
  // Check if the value is NaN
  if (isNaN(convert)) {
    return true; // Return true if the value is NaN
  } else {
    return false; // Return false if the value is a number
  }
}
// Testing the function with various inputs
console.log(checkvalue("hello,world")); //true
console.log(checkvalue(246)); //false
console.log(checkvalue("shiraz")); //true
console.log(checkvalue("123")); //false
