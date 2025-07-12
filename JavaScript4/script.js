console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  "Welcome to SuperPower of Functions"
);
console.log(
  "-----------------------------------------------------------------------------------"
);


// function statement

function fn(a){
    console.log("I am funnction", a);
    return 10;
}


const rref = fn("Hello")
console.log(rref);



console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " Functions Expression"
);
console.log(
  "-----------------------------------------------------------------------------------"
);

// function expression
const fn2 = function(a){
    console.log(" I am a function expression")
}
fn2()



console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " Arrow Functions"
);
console.log(
  "-----------------------------------------------------------------------------------"
);


const arrow = () => {
    console.log("I am an arrow function")
}

arrow()


console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " IIFE -> Immediately Invoke Function Expression"
);
console.log(
  "-----------------------------------------------------------------------------------"
);


(function(){
    console.log("I am an IIFE")
})()

// if function is called without parameter but initially we define function with parameter in that case function call and print along with undefine

console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " Trial Question"
);
console.log(
  "-----------------------------------------------------------------------------------"
);

function fn(a){
    console.log("Hello Function",a)
    return "Welcome"
}

const refval = fn("Developers");
console.log(refval)

console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " Introduction of Async Function"
);
console.log(
  "-----------------------------------------------------------------------------------"
);


// sync - code is exec line by line

// console.log("before")

// function fn(){
//     console.log("Hello Function")
// }
// fn()
// console.log("after")

// Async - a part of code is executed first remaining part executed it later
// console.log("before")
// setTimeout(fn, 2000)

// function fn(){
//     console.log("Hello Function")
// }
// console.log("after")
