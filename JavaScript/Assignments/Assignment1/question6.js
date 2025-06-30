function countvowel(str) {
    var vowels = "aieousAIEOUS";
    var count = 0; 
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

var input = "Hiteshi Joshi ";
var result = countvowel(input);
console.log("The number of vowels in the string is:", result);
