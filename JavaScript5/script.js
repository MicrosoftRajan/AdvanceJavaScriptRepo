// let a = true;
// console.log("Before")

// function fn(){
//     a = false
//     console.log("I broke a while loop")
// }
// setTimeout(fn, 1000)
// console.log("After")

// while(a){

// }

/**
 * set of rules 
 * every line of code written in js executed in call stacks
 * execution call remove from call stack when it finish
 * for call back coming from web APIs to execute -> call stack must be empty
 */



console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " Questions"
);
console.log(
  "-----------------------------------------------------------------------------------"
);

console.log("before")

function fn1(){
    console.log(" I am fn1")
}

function fn2(){
    console.log("I am fn2")
}


setTimeout(fn1,0);
console.log("After 0 sec call")
setTimeout(fn1,1000)
console.log("After 1 sec call")
setTimeout(fn2,2000)
console.log("After 2 sec call")
console.log("After")


// output 

/*
 * before
* After 0 sec call
* After 1 sec call
* After 2 sec call
* After
* I am fn1
* I am fn1
* I am fn2
 */

/* event Loop Wait the Se */