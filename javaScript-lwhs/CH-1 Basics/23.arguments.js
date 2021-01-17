function sum(x,y){
    let sum=0;
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(sum(2,3,5,10,10,10,10,50));