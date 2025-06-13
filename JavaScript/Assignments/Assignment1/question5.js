function triangleclassify(a,b,c) {
    if(a==b && b==c){
        console.log("It is an Equilaterl Triangle");
    }
    else if(a==b||b==c||a==c){
        console.log("It is an Isoceles Triangle");
    }
    else if (a ** 2 + b ** 2 == c ** 2){
        console.log("It is a Right-angled Triangle");
    }
    else if(a!=b && b!=c && a!=c){
        console.log("It is an Scalene Triangle");
    }
}
triangleclassify(3,3,3)  //Equilateral
triangleclassify(6,7,6)  //Isoceles 
triangleclassify(3,4,5)  //Right-angled 
triangleclassify(6,7,8)  //Scalene
