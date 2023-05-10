function startTimer() {
  var timer = document.getElementById("timer").value;
  var seconds = timer * 60;
  var stopSound = document.getElementById('nuclear');

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
      document.getElementById("timer").value = timer;
      document.getElementById("bomba").style.display = "block";
      stopSound.play();
    }
  }, 1000);
}
