// hoisting
// hello();
// var hello=function hello(){
//     console.log("hello world");
// }
const app=()=>{
    const myFunc=()=>{
        console.log("inside myFunc");
    }
    console.log("inside app");
    myFunc();
}
app(); 