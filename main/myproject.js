function toggleAudio() {
   var audio = document.getElementById("background-audio");
   var toggleButton = document.getElementById("toggle-audio-button");
   var audioControls = document.querySelector(".audio-controls");

   if (audio.paused) {
     audio.play();
     toggleButton.innerText = "Turn Off";
   } else {
     audio.pause();
     toggleButton.innerText = "Turn On";
   }
 }

 // Show audio controls when clicking on "Music" link
 document.getElementById("audio-link").addEventListener("click", function() {
   var audioControls = document.querySelector(".audio-controls");
   audioControls.style.display = (audioControls.style.display === "block") ? "none" : "block";
 });