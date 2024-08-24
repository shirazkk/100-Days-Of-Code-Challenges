"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function object(obj = {}) {
    for (let properties in obj) {
        console.log(`${properties} ${obj[properties]}`);
    }
}
object({ make: "Toyata", model: "MK4", year: "1993", color: "red" });
