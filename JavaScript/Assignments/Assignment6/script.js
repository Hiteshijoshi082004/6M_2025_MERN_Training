
    function updateClock() {
      const now = new Date()
      // console.log(now);
      
      const hours = now.getHours();
      // console.log(hours);
      const minutes = now.getMinutes();
      // console.log(minutes);
      const seconds = now.getSeconds();
      // console.log(seconds);

      document.getElementById('datetime').innerHTML = now;
      document.getElementById('hours').innerHTML = `${hours} Hours`;
      document.getElementById('minutes').innerHTML = `${minutes} Minutes`;
      document.getElementById('seconds').innerHTML = `${seconds} Seconds`;
    }

    setInterval(updateClock, 1000);
    updateClock(); 