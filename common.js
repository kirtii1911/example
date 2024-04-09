// common.js
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
 
 function showSection(sectionId) {
   // Hide all sections
   document.querySelectorAll('.home-page, #typing-tests, #lessons').forEach(section => {
     section.classList.add('hidden');
   });
 
   // Show the selected section
   document.getElementById(sectionId).classList.remove('hidden');
 }
 
 // Add an event listener for the logo name image
 document.querySelector('.topnav.menu').addEventListener('click', function(event) {
   event.preventDefault();
   showSection('home-page');
 });
 
 // Add event listeners for other navigation links
 document.querySelector('.topnav:nth-child(2)').addEventListener('click', function(event) {
   event.preventDefault();
   showSection('typing-tests');
 });
 
 document.querySelector('.topnav:nth-child(3)').addEventListener('click', function(event) {
   event.preventDefault();
   showSection('lessons');
 });
 
 // Check if there is a saved section in sessionStorage
 const savedSection = sessionStorage.getItem('currentSection');
 if (savedSection) {
   showSection(savedSection);
 }
 