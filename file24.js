// computed properties
const key1="objkey1";
const key2="objkey2";

const value1="anyvalue1";
const value2="anyvalue2";



const obj={   };
obj[key1]=value1;
obj[key2]=value2;
console.log(obj);
// spread operator
const array1=[1,2,3];
const array2=[1,2,3];
const array3=[...array1,...array2];
console.log(array3);
// if 3 dot not used than full array will be copied as it as 
const array4=[array1,...array2];
console.log(array4);
// spread operator in case of object 
const obj1={
    key1: "value 1",
    key2: "value 2"
};
const obj2={
    key3: "value 3",
    key4: "value 4"
};
const obj3={
    ...obj1,
    ...obj2
}
console.log(obj3);
// key  value pair
const newObject={
    ..."Anish"
}
console.log(newObject);