// clone of array
let array1=["item 1","item 2"];
let array2=array1.slice(0);
array1.push("item 3");
console.log(array2);
let array3=[].concat(array1);
array1.push("item 4");
console.log(array3);
// new by using spread operator
let array4=[...array1,"item 5","item 6"];
console.log(array4);