let a = 1
let b = 1

document.write("<table border = 1>")
for(let i=1;i <= 9 ;i++){
    document.write("<tr>")
    for(let j=1 ;j <= 9;j++){
        document.write("<td>")
        document.write(`${a} * ${b} = ${a*b}`)
        b++;
        document.write("</td>")
    };
    a++;
    b = 1;
    document.write("</tr>")   
}
document.write("</table>")
