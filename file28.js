// function expression
const sum=function(num1,num2){
    return num1+num2;
}
console.log(sum(54,69));
//arrow function
const sum1=(num1,num2)=>{
    return num1+num2;
}
console.log(sum1(45,86));
const isEven=number=>number%2===0;
let m=prompt("Enter the number to check");
console.log(isEven(m));44