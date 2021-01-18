/* var obj={
    num:100,
    greetings:"Hello world!",
    sum:function(){
        console.log("This is a sum function");
    }
}


console.log(obj.num);
console.log(obj.greetings);
obj.sum(); */

 var obj1={
    a:20,
    b:30
}
var obj2={
    a:20,
    b:30
}
/*var obj3=obj2;
console.log(obj1==obj2); //reference alada
console.log(obj2==obj3); //same reference
obj3.a=50;
console.log(obj2.a); // impact of reference */

// add object property
obj1.c=40;
obj1.d=100;
console.log(obj1.c);
console.log(obj1.d);
// delete object property
console.log(obj1.b);
delete obj1.b;
console.log(obj1.b);


