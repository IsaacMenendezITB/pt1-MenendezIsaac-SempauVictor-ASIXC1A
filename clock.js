function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
  
    if (h == 0) {
      h = 12;
    }
  
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
  
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000);
  }
  
  function startTimer() {
    var timer = document.getElementById("timer").value;
    var seconds = timer * 60;
  
    var countdown = setInterval(function() {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
  
      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }
  
      document.getElementById("timer").value = minutes + ":" + remainingSeconds;
      seconds--;
  
      if (seconds < 0) {
        clearInterval(countdown);
        alert("¡Tiempo terminado!");
        document.getElementById("timer").value = timer;
      }
    }, 1000);
  }
  
  showTime();
  