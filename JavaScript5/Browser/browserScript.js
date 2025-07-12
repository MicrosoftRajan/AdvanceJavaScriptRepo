// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.querySelector("button");

//     const cb = () => {
//         alert("Callback function executed");
//     };

//     btn.addEventListener("click", cb);
// });


// Object

// empty obj
let obj = {}


obj.name = "Aman"
obj.age = 21
obj.city="Azamgarh"

console.log(obj)


let cap = {
    firstName : "Steve",
    lastName : "Roger",
    movie:["First Captain", "EndGame", "Infinity War"],

    address : {
        state:"New York",
        district:"Mahatten"
    },
    isAvgenger:true,
    age:35,
    sayHi : function (){
        console.log("Hi, I am Captain America")
    }
}

console.log(cap)
// get

console.log(cap.firstName)
console.log(cap.lastName)
console.log(cap.isAvgenger)
console.log(cap.address.state)

// update
cap.friend = ["Tony", "Natasha", "Bruce Banner"];
console.log(cap.friend[0])

delete cap.movie

console.log("-----------------------------------------------------------------------------------------")

for(let key in cap){
    console.log(key, ":",cap[key])
}