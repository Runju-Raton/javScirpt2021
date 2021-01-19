function CreateHuman(type,live){
    this.type=type;
    this.live=live;
}

/* var ch1 = new CreateHuman("mammal",true);
console.log(ch1); */

class Human extends CreateHuman{
    constructor(name){
        super("mammal",true);
        this.name=name;
    }
}

var h1 = new Human("Runju Raton");
console.log(h1);

console.log(h1.hasOwnProperty('name'));
console.log(h1.hasOwnProperty('type'));
console.log(h1.hasOwnProperty('live'));
