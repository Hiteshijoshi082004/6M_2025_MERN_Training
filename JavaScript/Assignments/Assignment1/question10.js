var fruits =[]
fruits.push("Apple","Banana")
console.log(fruits);
fruits.push("Orange")
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.push("Grapes")
console.log(fruits);
fruits.pop()
console.log(fruits);

// Traverse the array 
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit"+(i+1)+":"+fruits[i]);
}
