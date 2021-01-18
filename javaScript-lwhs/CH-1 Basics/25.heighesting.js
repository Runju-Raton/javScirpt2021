console.log(add(5,10));
function add(){
    let sum=0;
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
