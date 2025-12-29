//promise is an object that eventually produces a value the success or failure of an operation 
//multiple loop   callback hell 
//collection of key and value parts
//collection of data
//resolve and reject

// const promise = new Promise((resolve,reject)=>{});


//function that takes another function is an argument 
const array = [1,2,2,2,3,4,5,6,5];

const array1 = array.includes(9);
console.log(array1);

//map always returns an array
// const array2 = array.map((item) => item * 2)
const array2 = array.map((item) => item * 2)

console.log(array2);

//find  return  the first 
//value that marches the condition

const array4 = array.find((item,index) => item % 5 === 0)

console.log(array4);

//filter return all the values that matches the condition
const names = ["john","doe","smith","jane"];
const firstName = names.filter((item) => item.startsWith('j'));
console.log(firstName);
