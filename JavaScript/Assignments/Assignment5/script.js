var a = prompt("Enter First Number:")
var b = prompt("Enter second Number:")
var num1 = parseInt(a)
var num2 = Number(b)
var sum = num1 +num2
console.log(sum);
document.getElementById("sum").innerText = `REQUIRED SUM IS: ${sum}`
