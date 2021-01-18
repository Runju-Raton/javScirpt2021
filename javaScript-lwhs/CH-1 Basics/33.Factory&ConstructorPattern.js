//constructor function
/* function Human(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}

var h1 = new Human("runju",24,"Male");
var h2 = new Human("Machine Man",40,"Male");

console.log(h1);
console.log(h1.name);
console.log(h2);
console.log(h2.name); */

// factory pattern
function CreateHuman(name,age,gender){
   return{
    name:name,
    age:age,
    gender:gender
   }
}
var ch1 =  CreateHuman("Runju",24,"Male");
var ch2 =  CreateHuman("Machine Man",40,"Male");
console.log(ch1);
console.log(ch2);