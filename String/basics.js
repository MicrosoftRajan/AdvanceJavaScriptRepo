const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;

const string4 = new String("Welcome to Rajan Labs");

const a = string4.charAt(0);
console.log(a);

if (string1 > string4) {
  console.log(`${string1} is greater that ${string4}`);
} else {
  console.log(`${string4} is greater than ${string1}`);
}

s1 = "Hello World";
s2 = "Hello World";

if (s1 === s2) {
  console.log("Both strings are equal");
} else {
  console.log("Both strings are not equal");
}

str1 = new String("Jarvis is an AI assistance");
str2 = "Jarvis is an AI assistance";
var str3 = String("Jarvis is an AI assistance");

if (str1 === str2) {
  console.log("Both strings are equal");
} else {
  console.log("Both strings are not equal");
}

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

const id = Symbol("userId");

const user = [
  {
    [id]: 1,
    name: "Rajan",
  },
  {
    [id]: 1,
    name: "Priya",
  },
];

console.log(user[0][id])

const hello = "     Welcome "
const s = hello.trim()

console.log(s)


const b = "Welc/ome"

console.log(b.toWellFormed());

const quotes = "AN APPLE IN A DAY KEEPS A DOCTOR AWAY!";

console.log(quotes.split(" "));
console.log(quotes.slice(3));


const regx = /[^\w\s']/g

// console.log(quotes[quotes.search(regx)])
console.log(quotes.search(regx))

console.log(quotes.reverse())