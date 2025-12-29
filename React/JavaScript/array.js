//indexing starts from 0
const array= [1,2,3,4,5,"name","string"];
console.log(array);
console.log(array[5]);
console.log(array.length);

//key:value
const object = {name: "John", age: 30, city: "New York"};
console.log(object);
console.log(" Name:",object.name);

//template literal/String Literals (``)
console.log(`City Name: ${object.city}`);

const array1= [1,2,3,4,5,6,7,"name","string"];
console.log(array1);    
console.log(typeof array1);

array1.push("new item");
console.log(array1);

array1.pop();
console.log(array1);

array1.unshift(9);
console.log(array1);

array1.shift();
console.log(array1);
