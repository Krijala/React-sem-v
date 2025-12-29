// function condition(){
//     const a = "shyam";
//     if(a==="ram"){
//         console.log("this is ram");
//     }
//     else if(a ==="shyam"){
//         console.log("this isnot shyam");
//     }
//     else{
//         console.log("this is shyam");
//     }
// }
// condition();


function check(){
    const a = "ram";
    {
        a =="ram" ? console.log("this is ram") : console.log("this is not ram");
    }
}check();

console.log(`${"this is shyam"}`);

function argument(num1, num2){
 return num1 * num2;
}
console.log(argument(6,7));

const test = (num1,num2) =>{
    console.log(num1*num2);
}
test(8,9);

