function createDiv(){
    var height = document.getElementById("height").value
    var width  = document.getElementById("width").value
    var color = document.getElementById("color").value
    var text = document.getElementById("text").value
    var bgcolor = document.getElementById("bg").value
    var div =document.getElementById("maindiv")
    div.style.height = height
    div.style.width = width
    div.style.color = color
    div.innerText = text
    div.style.backgroundColor = bgcolor
    
}