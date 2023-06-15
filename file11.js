// small game project 
let winningNumber=19;
let userguess=prompt("guess the number");
userguess=+userguess;
if(userguess==winningNumber){
    console.log("you guessed the right number");
}
else if (userguess<winningNumber){
    console.log("you guessed a small number");
}
else{
    console.log("you guessed a greater number")
}