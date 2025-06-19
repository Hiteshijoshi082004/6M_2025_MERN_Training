var addArray = []

var data = document.getElementById("addArray").addEventListener("click",()=>{
     var input = document.getElementById("input1").value
     if (input) {
        addArray.push(input)
        console.log(input);
         document.getElementById("input1").value = "";
     }
     
})

var showData =  document.getElementById("showData").addEventListener("click", () => {
        var select = document.getElementById("list")
        for(var i =0;i<addArray.length;i++){
            select.innerHTML += `<option>${addArray[i]}</option}`
        }
      
})

