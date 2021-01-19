var names=["Runju","Shakib","Mamun","Kader","Sifat"];

/* for(let name in names){
    console.log(names[name]);
} */

var obj={
    name:"Runju raton",
    age:24,
    education:"Bsc in CSE"
}
for(let property in obj){
    console.log(property+" : "+obj[property]);
}
console.log(obj)