function calculateGST() {
      var amount = Number(document.getElementById("amount").value);
      var gstRate = Number(document.getElementById("gstRate").value);

      if (isNaN(amount) || isNaN(gstRate) || amount <= 0 || gstRate < 0) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
      }

      var gstAmount = (amount * gstRate) / 100;
      var total = amount + gstAmount;

      document.getElementById("result").innerHTML = `
        <strong>Original Amount:</strong> ₹${amount.toFixed(2)}<br>
        <strong>GST @ ${gstRate}%:</strong> ₹${gstAmount.toFixed(2)}<br>
        <strong>Total Amount (Incl. GST):</strong> ₹${total.toFixed(2)}
      `;
    }