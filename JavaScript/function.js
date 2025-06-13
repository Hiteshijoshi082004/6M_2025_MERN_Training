function printName(x){
    x = "guest"
    console.log("Name is ",x);
}
printName("hiteshi")

setInterval(printName,1000)

setInterval(()=>{
    console.log("Arrow");
    
},2000)