console.log("Hello World!");
console.log(process.argv);
//binary path
//file name

/* input in javaScript 
=======================
1.go to terminal
2.type node filename input1 input2 ........ input n
3.press enter
========================
your input1 will store process.argv[2]
 input2 will store process.argv[3]
 4,5,6 respectively  */
console.log("Addition: "+(parseInt(process.argv[2])+parseInt(process.argv[3])));
console.log("Subtraction: "+(parseInt(process.argv[2])-parseInt(process.argv[3])));
console.log("Multiplication: "+(parseInt(process.argv[2])*parseInt(process.argv[3])));
console.log("Division: "+(parseInt(process.argv[2])/parseInt(process.argv[3]))); 


