const audioElement = document.getElementById("OBISA!!!");

function playAudio() {
  audioElement.currentTime = 0;
  audioElement.play();
}

const button = document.getElementById("obisa-button"); // Target the specific button using its ID
button.addEventListener("click", playAudio);
