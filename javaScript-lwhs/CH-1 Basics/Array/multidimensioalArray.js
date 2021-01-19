//document.write("We are going to learn Multidimensional Array");

var array=[
    ["Harry",18,"Male","B.Com"],
    ["Sunny",19,"Male","BCA"],
    ["Sarah",18,"Male","BCA"],
    ["Tom",1,"Male","BCA"],
    ["Mac",17,"Male","BCA"],
    ["nishi",17,"Male","BCA"]

];
document.write("<table border='2px' cellspacing='0'>");
for(var i=0;i<array.length;i++){
    document.write("<tr>");
    for(var j=0;j<array[i].length;j++){
        document.write("<td>"+array[i][j]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

/* document.write("<table>");
    document.write("<tr>");
        document.write("<td>"+"Runju Raton"+"</td>");
        document.write("<td>Boss</td>");
        document.write("<td>Ar ki???</td>");
    document.write("</tr>");
document.write("</table>"); */


