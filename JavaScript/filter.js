let num =[ 1,2,3,4,5,6,7,8,9,10]
let x = num.filter((el,index)=>{
    if (el%2==0) {
        return el
    }
})
console.log(x);