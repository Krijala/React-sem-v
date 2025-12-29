//function expression

function personal(cb){
console.log("Function expression called personal");

cb(address);
}
function names(cb){
      console.log("My name is function expression");
    cb();
}
function address(){
      console.log("My address is function expression");
}
personal(names);



function time(cb){
    setTimeout(() => {
        cb();
    }, 2000);
    
}
console.log("This is after settimeout");
