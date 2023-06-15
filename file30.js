//lexical scope
function myapp(){
    const myvar=65;
    function myFunc(){
       const myvar="value1";
        console.log("the values is ",myvar);
    };
    const myfunc2=()=>{}; 
    console.log(myvar);
    myFunc();
}
myapp();