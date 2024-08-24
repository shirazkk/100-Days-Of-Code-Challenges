//             🚀 Day 33 Challenge: Start Coding! 🚀

// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

//cretae a function to find how many days left for new year
function daysleft() {
  const date1 = new Date(); //current date
  const date2 = new Date(`${date1.getFullYear() + 1}-01-01`); //new year date

  // Calculate the difference in milliseconds
  const diffrenceInMilliseconds = date2.getTime() - date1.getTime();

  const diffrenceInDays = Math.ceil(
    diffrenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  return diffrenceInDays;
}
console.log(`Days until New Year: ${daysleft()}`);


