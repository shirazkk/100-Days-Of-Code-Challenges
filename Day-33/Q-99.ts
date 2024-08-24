//             🚀 Day 33 Challenge: Start Coding! 🚀

// Question 99: Generate a date object representing your next birthday and log it to the console.

function nextBirthday(month: number, day: number) {
    const todayDate = new Date(); // Get today's date
    const currentYear = todayDate.getFullYear(); // Get the current year
    
    let birthday=new Date(currentYear,month-1,day) // Create a date object for this year's birthday
    
    if (birthday < todayDate) { 
        // If the birthday has passed, set the year to the next year
        birthday = new Date(currentYear + 1, month-1, day);
    }
    
    return birthday; // Return the next birthday date
}

const myBirthday = nextBirthday(10, 19); // Call the function with your birthday month and day
console.log(myBirthday.toLocaleDateString()); // Log the next birthday in a readable format
