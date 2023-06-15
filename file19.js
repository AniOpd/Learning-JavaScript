// for loop in array
let fruits=["mango","apple","banana","grapes","guava"];
let fruits2=[];
for(let i=0;i<fruits.length;i++){
fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
// const array
const array1=[];
for(let i=0;i<fruits.length;i++){
    array1.push(fruits[i]);
    console.log(array1[i]);
}
