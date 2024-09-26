"use strict";
// type casting
const jsonData = '{"name":"alice" , "age":20}';
const data = JSON.parse(jsonData); // type casting
console.log(data.name);
// type assertion
const elem = document.getElementById('elem'); // type assertion
console.log(elem.value);
