 function generateTable() {
      const start = parseInt(document.getElementById("start").value);
      const end = parseInt(document.getElementById("end").value);
      const number = parseInt(document.getElementById("num").value);
      const container = document.getElementById("tableContainer");

      if (isNaN(start) || isNaN(end) || isNaN(number)) {
        container.innerHTML = "<p style='color:red;'>Please enter valid numbers.</p>";
        return;
      }

      if (start > end) {
        container.innerHTML = `<p style='color:red;'>Start should be less than or equal to End.</p>`;
        return;
      }

      let tableHTML = `<table><tr><th>Expression</th><th>Result</th></tr>`;

      for (let i = start; i <= end; i++) {
        tableHTML += `<tr><td>${number} × ${i}</td><td>${number * i}</td></tr>`;
      }

      tableHTML += "</table>";
      container.innerHTML = tableHTML;
    }