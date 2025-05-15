/*
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
*/
/*
//使用 prompt 讓使用者輸入年齡，顯示「成年 / 未成年」。

let age = prompt("請輸入年齡:");
age = parseInt(age);

if (isNaN(age)) {
  alert("請輸入數字！");
  //prompt("請輸入年齡:");
} else if (age < 18) {
  alert("未成年");
} else if (age >= 18) {
  alert("成年");
}
*/
/*
//使用 switch 撰寫一個功能選單（輸入 1～3 執行不同功能）。

let num = prompt("請輸入1~3");
num = parseInt(num);
switch (num) {
  case 1:
    alert("我");
    break;
  case 2:
    alert("你");
    break;
  case 3:
    alert("他");
    break;
  default:
    alert("請輸入有效數字！");
}
*/

//用三元運算子顯示使用者分數是否及格。

let score = 59;
let result = score >= 60 ? "及格" : "不及格";
console.log(result);
