function generateDivs() {
      const num = parseInt(document.getElementById("numberInput").value);
      const output = document.getElementById("output");
      output.innerHTML = ""; 

      if (isNaN(num) || num <= 0) {
        output.innerHTML = "<p style='color:red;'>Please enter a valid positive number.</p>";
        return;
      }

      const color = (num % 2 === 0) ? "red" : "yellow";

      for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.className = "box";
        div.style.backgroundColor = color;
        output.appendChild(div);
      }
    }