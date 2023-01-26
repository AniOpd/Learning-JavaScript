// array 
// ordered collection of items
let numbers=[12,34,23,43,23];
console.log(numbers);
let mixed=[1,2,3,4,"string",null,undefined];
console.log(mixed);
mixed[4]=+mixed[4];
console.log(typeof mixed[4],mixed[4]);
console.log(Array.isArray(mixed));