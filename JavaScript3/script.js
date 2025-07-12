let a = 10;
console.log(a); // 10

function fn() {
  let a = 20;
  console.log(a); // 20
  a++;
  console.log(a); //21
}
fn();
console.log(a); //10

/* breakpoint is showing how to run code */

// let - block scope

// block scope - anything b/w two curly braces such as loop, conditional

let b = 1;
{
  let b = 30;
  console.log(b);
}

console.log(b);

console.log(
  "-----------------------------------------------------------------------------------"
);
console.log("Question");
console.log(
  "-----------------------------------------------------------------------------------"
);

let c = 10;
console.log(c); // 10
function fn() {
  let c = 20;
  console.log(c); // 20
  c++;
  console.log(c); //21

  if (c) {
    let c = 30;
    c++;
    console.log(c); //31
  }
  console.log(c); //21
}
fn();
console.log(c); //10

console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  "Security feature of let if we declare the value and try to print before it say you cannot access VarName before initialization. it is temporary dead"
);
console.log(
  "-----------------------------------------------------------------------------------"
);
// console.log(VarName) // this is an error and also security features
let VarName;
// console.log(VarName)
VarName = 10;

console.log(VarName);

console.log(
  "-----------------------------------------------------------------------------------"
);
console.log("Question 2");
console.log(
  "-----------------------------------------------------------------------------------"
);

// outer variable and function
//this outer scope is define by function -> in js called Lexically Scoped

let varName = 10;

function d() {
  console.log(varName); // 10
}

function e() {
  let varName = 20;
  console.log(varName); // 20
  d();
  console.log(varName); //10
}
e()


console.log(
  "-----------------------------------------------------------------------------------"
);
console.log("Function and SuperFunction ");
console.log(
  "-----------------------------------------------------------------------------------"
);

// function -> function definition
// fn call()

let arr = [10,20,30,40,50,60,70];
let arr2 =arr;
let f = 80;
let g = f;
// let arr2 = [40,50,60,70];


// fn with parameter

function fn(params){
  console.log("hello params", params)
}

fn("Hello")
fn(arr2)

console.log(fn)


// function can store in variable or as reference
// this called function expression
const reffuncc = function fn(){
  console.log("hello i am a fuunction")
}

// store in reference
const newreffunc = reffuncc

newreffunc()

console.log(
  "-----------------------------------------------------------------------------------"
);

reffuncc()



console.log(
  "-----------------------------------------------------------------------------------"
);
console.log("bug question or function overloading to solve it by function expression ");
console.log(
  "-----------------------------------------------------------------------------------"
);

function real(){
  console.log("real function")
}

function real(){
  console.log("fake function")
}

function real(){
  console.log("You both are wasted")
}

real()


console.log(
  "-----------------------------------------------------------------------------------"
);
console.log("Passing Function inside function");
console.log(
  "-----------------------------------------------------------------------------------"
);

function bigger(params){
  console.log("i am bigger")
  params();
}

function smaller(){
    console.log("i am smaller")
}


bigger(smaller)