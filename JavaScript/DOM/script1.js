document.getElementById("open-btn").addEventListener("click",()=>{
    let x = window.open()
    x.document.write("Hello")
})
document.getElementById("print-btn").addEventListener("click",()=>{
   let y= window.open()
   y.document.write(document.getElementById("table").innerHTML)
    y.print()
})

function changeScreen(){
    window.location.assign("EventListener.html")
}

function replaceScreen(){
    window.location.replace("EventListener.html")
}

function reload(){
    window.location.reload()
}