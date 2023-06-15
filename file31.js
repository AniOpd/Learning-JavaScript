// block scope vs function scope


//let and const are block scope
//var is function scope
// {
//    let firstName="anish";
//    console.log(firstName);
// }
// {
// var myName="anish";
// }
// console.log(myName);
//default parameters
function addTwo(a,b=1){
    return a+b;
}
const ans=addTwo(5,9);
console.log(ans);
console.log(addTwo(5));
