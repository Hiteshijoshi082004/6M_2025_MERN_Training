let restro = {
    name:"food Bazaar",
    rating:4,
    cost:400
}

let str = JSON.stringify(restro)
// console.log(str);

let obj = JSON.parse(str)
console.log(obj);
