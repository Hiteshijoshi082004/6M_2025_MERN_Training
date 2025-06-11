function showimg(){
    document.getElementById("img").src="download.jpg"
    document.getElementById("btn1").style.display = "none";
        document.getElementById("input1").type="radio"

   
}
function setvalue(){
    var in2=document.getElementById("input2").value="cybersecurity"
    document.getElementById("para").innerText=in2;
}
function clean(){
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="none"
    document.getElementById("input1").style.display="none"
    document.getElementById("input2").style.display="none";
    document.getElementById("img").style.display="none";
    document.getElementById("para").style.display="none";
    document.write("screeen is cleared");

}