/* excution of code is on stack */

function fn(){
    console.log("this is fn")
    function inner(){
            console.log("this is inner fn")
    }
    inner()

}

fn()

/* architecture Follows 
1.Code -> 2.global (Memory Allocate) -> 3.heap

all the code executed on call stack(whole stack)
stack is called execution context

execution context -> 2 phase includes
a. memory allocation -> hoisting -> is also called execution context creation -> window, this, outer scope comes under execution context creation
b. code execution
*/
/* print undefine at memory allocation time in variable declaration
function -> memory allocation in -> heap
function can work before call above declaration
 */
let a 
console.log(a)

function fn(){
    console.log("hello")
}


function real(){
    console.log("You are in Apple")
}

function real() {
        console.log("You are in Samsung Electronics")
}

function real() {
        console.log("You are in Mercedes")
}

real()