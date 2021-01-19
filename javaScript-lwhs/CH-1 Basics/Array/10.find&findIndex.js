var ages1=[10,20,15,17,18,16,14,50,72];
var ages2=[18,20,22,24,26,30,29];

console.log(ages1.find(age=>{
    if(age==18){
        return true;
    }
}));

console.log(ages1.findIndex(age=>{
    if(age==18){
        return true;
    }
}));