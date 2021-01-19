var ages1=[10,20,15,17,18,16,14,50,72];
var ages2=[18,20,22,24,26,30,29];

//filter function return array 
console.log(ages1.filter(age=>{
    if(age>=18){
        return true;
    }
}));

console.log(ages2.filter(age=>{
    if(age>=18){
        return true;
    }
}));