"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function making_shirt(size = "Large", message = "I love typescript") {
    console.log(`Making a "${size}" t-shirt with the message:"${message}" printed on it`);
}
making_shirt();
making_shirt("medium");
making_shirt("Extra_Large", "don't judge book by its cover");
