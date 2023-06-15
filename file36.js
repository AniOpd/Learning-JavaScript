// important array methods



// forEach
// const number=[1,2,3,4,5,6];
// function multi(number,index){
//     console.log("Index is ",index);
//     console.log("the double of number is ",number*2);
// }
// multi(number[5],5);
// for (let index = 0; index < number.length; index++) {
//     multi(number[index],index);
// }
// number.forEach(multi);
// number.forEach(function(numbers,index){
//     console.log("The number at index ",index," is ",numbers*4);
// })




//map
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const square=function(number){
//     return number*number;
// }
// // const squarenumber=number.map(square);
// // console.log(squarenumber);
// // const squarenumber=numbers.map((number,index)=>{
// //     return `index:${index},${number*number*number}`;
// // });
// // console.log(squarenumber);
// const users=[
//     {firstName:"Anish",age:21},
//     {firstName:"Anish",age:21},
//     {firstName:"Anish",age:21},
//     {firstName:"Anish",age:21},
//     {firstName:"Anish",age:21},
//     {firstName:"Anish",age:21},
//     {firstName:"Anish",age:21},
// ]
// const names=users.map((user)=>{
//     return user.firstName;
// })
// console.log(names);




//filter method
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const isEven=(number)=>{
//     return number%2===0;
// }
// const evennumber=numbers.filter(isEven);
// console.log(evennumber);
// const isodd=number=>{
//     return number%2!=0;
// }
// const oddnumber=numbers.filter(isodd);
// console.log(oddnumber);




//reduce method
// const numbers=[1,2,3,4,5,6,96];
// //aim:sum of all the rumbers in array
// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// });
// console.log(sum);
// const userCart=[
//     {prductId:1,productName:"mobile",price:12000},
//     {prductId:2,productName:"keychain",price:100},
//     {prductId:3,productName:"monitor",price:6000},
//     {prductId:4,productName:"gpu",price:8000},
//     {prductId:5,productName:"cpu",price:5000},
// ]
// const totalPrice=userCart.reduce((tp,cp)=>{
//     return tp+cp.price;
// },0);
// console.log(totalPrice);



//sort method
// const numbers=[3,1,5,2,95,1,24,15,4];
// numbers.sort();
// console.log(numbers);
// const userName=['Anish','Manish','Dinesh','Subhash'];
// userName.sort();
// console.log(userName);
// const numbers=[3,1,5,2,95,1,24,15,4];
// numbers.sort((a,b)=>a-b);
// console.log(numbers);
// numbers.sort((a,b)=>b-a);
// console.log(numbers);
// const userCart=[
//     {prductId:1,productName:"mobile",price:12000},
//     {prductId:2,productName:"keychain",price:100},
//     {prductId:3,productName:"monitor",price:6000},
//     {prductId:4,productName:"gpu",price:8000},
//     {prductId:5,productName:"cpu",price:5000},
// ]
// price low to high
// userCart.sort((a,b)=>{
//     return a.price-b.price;
// })
// console.log(userCart)
// price low to high
// const lowtoHigh=userCart.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// })
// console.log(lowtoHigh)
// const Hightolow=userCart.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// })
// console.log(Hightolow);



//find method
// const myArray=["hello","catt","doggu","lion"];
// function islength3(string){
//     return string.length===4;
// }
// const ans=myArray.find(islength3);
// console.log(ans);


//every method
