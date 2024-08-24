//create car object with type any
let car: any = {
  make: "Toyota",
  model: "MK4",
  year: 1993,
};
//adding new property color in our car object
car.color = "Red";
//update the year property of car object
car.year = 1995;
console.log(car); //log the updated car object
