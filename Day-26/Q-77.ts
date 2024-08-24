//             🚀 Day 26 Challenge: Start Coding! 🚀

// Question 77: Default Parameters: Write a function that greets a user.
// It should take the user's name as a parameter and say hello. If no name is given,
// it should greet an anonymous user.

//Define function which greet a user by name.
// if no name is provided it greets default value given in parameter
function Defaultparam(name: string = "Shiraz") {
  //return a greet message to user
  return `Hello ${name} how are you!`;
}
//log the result with name and without name
console.log(Defaultparam("Ali")); //output: Ali

console.log(Defaultparam()); //output: Shiraz
//this is called default parameter which we give in parameter.
//if user dont give name in function calling so default value print
