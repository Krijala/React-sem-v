//callback function is a 
//function that takes another function as an argument and is the starting line of asynchornous js 

function normal (cb, num1, num2){
   console.log(num1,num2,"number");
   cb();
   test();   
}
function cb(){
    console.log("this is callback function");
}
function test(){
    console.log("this is test function");
}
normal(cb,1,2);




function check(a,b){
    let sum;

    return (sum = a + b)     
  
}
const sum =check(2,5);
console.log(sum);
