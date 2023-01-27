// difference b/w dot and braccket notation
const person={
    name:"Anish",
    "roll no":211230008,
    branch:"EEE",
    group:1
}
console.log(person["roll no"]);
console.log(person.group);
const key="email";
person[key]="anishd988@gmail.com";
console.log(person);

// for in loop
// objec.keys
for(let key in person){
    console.log(person[key]);
}
