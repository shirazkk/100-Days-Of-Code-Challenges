"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Factory function that creates a user profile
function CreateUserProfile(name, age) {
    // Return an object with a method to display user info
    return {
        // Method to display user information
        displayinfo() {
            // Print the name and age to the console
            console.log(`name: ${name}, age: ${age}`);
        },
    };
}
const userProfile = CreateUserProfile("Shiraz ALi", 20);
userProfile.displayinfo(); //access user name and age
