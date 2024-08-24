//define a function shows every detail about an object
function object(obj: any = {}) {
  //loop through each property
  for (let properties in obj) {
    console.log(`${properties} ${obj[properties]}`);
    // Shows the property name and its value
  }
}
// Using the function with a car object
object({ make: "Toyata", model: "MK4", year: "1993", color: "red" });
