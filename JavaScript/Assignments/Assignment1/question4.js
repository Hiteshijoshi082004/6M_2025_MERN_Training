var weight = 100
var height = 5.5
var BMI = weight/(height)*2
console.log("Body Mass Index Value is:",BMI);

if(BMI<10.5){
    console.log("Body is underweight");
}
else if(BMI<24.9 && BMI>=18.5){
    console.log("Body weight is normal");
}
else if(BMI>=25 && BMI<29.9){
    console.log("Body is overweight");
}
else if(BMI>=30){
    console.log("Body is having Obesity Issues");
    
}
