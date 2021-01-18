var a={
    b:40,
    c:"Hello World!"
}

console.log(a.b);
console.log(a.c);

var newObj=Object.create(a);

console.log(newObj.b);
console.log(newObj.c);

newObj.d=140;
newObj.e="Hi";
/* //both are undefine
console.log(a.d);  
console.log(a.e); */


console.log(newObj.d);
console.log(newObj.e);

console.log(newObj.hasOwnProperty('b'));
console.log(newObj.hasOwnProperty('d'));

