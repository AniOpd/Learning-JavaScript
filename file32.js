// rest parameters
function myFunc(a,b,...c){
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`c is ${c}`);
}
myFunc(3,4,5,6,7,8,9,0,1,2,3);

//add all arguments
/*function addall(...numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
sum=sum+numbers[i];
    }
    console.log(sum);
}
addall(1,2,3,4,5,6,7,8,9,10);
*/
function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total=total +number;
    }
    return total;
}
const ans=addall(1,2,3,4,5,6,7,8,9);
console.log(ans);