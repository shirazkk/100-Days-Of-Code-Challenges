"use strict";
//                                    🚀 Day 31 Challenge: Start Coding! 🚀
//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
Object.defineProperty(exports, "__esModule", { value: true });
function replacing(arr) {
    const indexOfBananna = arr.indexOf("Bananna");
    console.log(`IndexOfBanann:${indexOfBananna}`);
    arr[indexOfBananna] = "Mango";
    return arr;
}
const arr = ["Apple", "Peach", "Bananna"];
console.log(replacing(arr));
// const arr:string[]=["Apple","Peach","Bananna"]
// const indexOfBananna=arr.indexOf("Bananna")
// arr.splice(indexOfBananna,1,"Mango")
// console.log(indexOfBananna);
// console.log(arr);
