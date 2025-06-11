var img1 = document.getElementById("img1");
var hidebtn = document.getElementById("hidebtn");
var showbtn = document.getElementById("showbtn");

function showimg(){
    console.log("show img call");
    img1.src = "a4.jpg";
    img1.style.height = "100px";
    img1.style.width = "100px";
    img1.style.borderRadius = "50%";
    hidebtn.style.display = "inline";
    showbtn.style.display = "none";
    // para text show setvalue
    document.getElementById("para1").innerText = "hello para";


    
}
function hidefun(){
    console.log("hide img call");
    img1.src = "";
    hidebtn.style.display = "none";
    showbtn.style.display = "inline";
    
}

function setvalue(){
    console.log("set value");
    document.getElementById("inp1").value ="hello";
    
}