/* var r =RegExp('^[a-z_][a-z0-9]*',"i"); //constructor
//var s="c";
//var s="_c";
var s="5_c";
console.log(r.test(s)); */

var r=/a(b+)a/i;
var s="abbba"; //return array abbba in 0 index
//var s="abbbba";//null
console.log(r.exec(s));