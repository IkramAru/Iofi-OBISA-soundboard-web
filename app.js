const audioElement = document.getElementById("OBISA!!!"); // Cache the audio element for direct access

function playAudio() {
  audioElement.currentTime = 0; // Reset to the beginning for overlapping
  audioElement.play();
}

const button = document.createElement("button");
button.textContent = "OBISA!!!";
button.addEventListener("click", playAudio);

document.getElementById("buttons").appendChild(button);
