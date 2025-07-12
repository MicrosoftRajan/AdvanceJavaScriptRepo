let arr = ["Rajan", "Ira", "Priya", "Manisha", "Aman"];

arr.forEach((names, arr) => {
  console.log(`the index is ${arr} and ${names}`);
});

console.log(
  "----------------------------------------------------------------------------------------"
);
// methods

arr.push("Siddhart Manhotra ");
arr.forEach((names, arr) => {
  console.log(names);
});
console.log(
  "----------------------------------------------------------------------------------------"
);

arr.pop();
arr.forEach((names, arr) => {
  console.log(names);
});
console.log(
  "-----------------------------------------------------------------------------------------"
);
arr.unshift("Arjun");
arr.forEach((names, arr) => {
  console.log(names);
});

console.log(
  "-----------------------------------------------------------------------------------------"
);

//Splice - remove the elements

// let s = arr.splice(2,5)

// arr.forEach((names, arr) => {
//     console.log(s)
//     console.log(names)
// })

console.log(
  "-----------------------------------------------------------------------------------------"
);

// includes
console.log(arr.includes("Rajan"));

console.log(
  "-----------------------------------------------------------------------------------------"
);

// slice - doubt

let slice = arr.slice(1);
console.log(slice);
arr.forEach((names, arr) => {
  console.log(names);
});

console.log(
  "-----------------------------------------------------------------------------------------"
);

let favCars = [
  "Jaguar",
  "BMW",
  "RangeRover",
  "Defender",
  "Nissan GT",
  "MG",
  "Fortuner",
];
let dreamCar = ["Ferrari", "Audi", "Lamborghini", "Roll Royce"];

let join = favCars.join("->");

console.log(join);

console.log(
  "-----------------------------------------------------------------------------------------"
);

favCars.forEach((names, favCars) => {
  console.log(names);
});
console.log(
  "-----------------------------------------------------------------------------------------"
);

// concat

let concat = favCars.concat(dreamCar);

console.log(concat);

console.log(
  "-----------------------------------------------------------------------------------------"
);

console.log("Practice Question");

console.log(
  "-----------------------------------------------------------------------------------------"
);
function AdvManipulation(fruits) {
  //     let first = fruits.shift();
  //     fruits.unshift("new")
  //     fruits.unshift(first)

  // return first

  //    fruits.splice(2,1)

  //     let joined = fruits.join(",")
  //     return joined


  /* Ways to do it */
  let first = fruits.splice(1, 1, "new");
  arr[2] = "dates";
  arr[3] = "cherry"
  let joined = fruits.join(",");
  return joined;
}
const fruits = ["apple", "banana", "cherry", "dates"];

console.log(AdvManipulation(fruits));
