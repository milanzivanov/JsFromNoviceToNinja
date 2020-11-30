console.log("chapter 14");
console.log("//////////////");

// store data in local storage
localStorage.setItem("name", "milan");
localStorage.setItem("age", "37");

// get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);


// update data
localStorage.setItem("name", "ana");
localStorage.age = "40";

name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);