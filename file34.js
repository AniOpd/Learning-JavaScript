// callback function
function myFunc(callback){
    console.log("hello there!");
    callback();
}
function myFunc1(){
    console.log("anish");
}
myFunc(myFunc1);