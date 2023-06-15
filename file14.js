// for loop and do while
for(let i=0;i<10;i++){
    console.log(i+1);
    if(i===5){
        continue;
    }
}

let total=0;
let num=10;
for(let i=0;i<num;i++){
    total=total+i+1;
    console.log(total);
    if(total===28){
        break;
    }
}
let i=10;
do{
    console.log(i);
    i++;
}while(i<=9);
console.log(i);