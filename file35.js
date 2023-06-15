//function returning function
function myFunc(){
    function hello(){
        console.log("hello");
    }
    return hello;
}
const ans=myFunc();
ans();
