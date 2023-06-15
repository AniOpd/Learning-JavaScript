// function print(){
//  console.log("My name is Anish");
// }
// print(); 
// function isEven(number){
// if(number%2==0){
//     return true;
// }
// return false;
// }
// const num=prompt("Enter the number to check");
// if(isEven(num)){
//     console.log("The number is even");
// }
// else{
//     console.log("Not an even number");
// }
//function
//input:string
//output:firts Character
// function k(str){
//     return str[0];
// }
// const str=prompt("Enter the string");
// console.log(k(str));
//function on binary search;
function bs(array,target){
   let e=array.length-1;
   let i=0;
   let m=i+(e-i)/2;
   while(i<=e){
    if(array[m]==target){
        return m;
    }
    else if(array[m]<target){
        i=m+1;
    }
    else{
        e=m-1;
    }
    m=i+(e-i)/2;
   }
   return -1;
}
let num=[];
let n=prompt("Enter the number of digits you want to enter");
for(let i=0;i<n;i++){
    let x=prompt("Enter the value of x");
    num.push(x);
}
const target=prompt("Enter the value of target")
console.log(bs(num,target));