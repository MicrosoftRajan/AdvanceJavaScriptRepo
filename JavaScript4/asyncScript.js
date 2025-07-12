console.log(
  "-----------------------------------------------------------------------------------"
);
console.log(
  " Complex Code for async"
);
console.log(
  "-----------------------------------------------------------------------------------"
);


let t = true;
console.log("before")

function fn(){
    t = false
    console.log("i broke the while loop")
}
setTimeout(fn, 2000)
console.log("after")

// value is infinite 

while(t){ 

}

// console.log() -> Browser
// SetTimeout() -> Browser
// document -> Browser
// window -> Browser

// what is js doing then

// it gives us the logics

// features : environment

/*

Mobile Application -> react Native -> logic provide by Js
Frontend  -> Browser -> logic provide by Js
Backend -> Node Js -> logic provide by Js
Desktop Application -> Electron -> logic provide by Js
*/