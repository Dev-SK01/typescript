interface data{
    name:string;
    age:number
}
// type casting
const jsonData = '{"name":"alice" , "age":20}'

const data = JSON.parse(jsonData) as data; // type casting

console.log(data.name);

// type assertion

const elem = document.getElementById('elem') as HTMLInputElement; // type assertion
console.log(elem.value)