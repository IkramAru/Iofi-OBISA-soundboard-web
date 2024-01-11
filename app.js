const audioElement = document.getElementById("OBISA!!!");

const button = document.getElementById("obisa-button");
button.addEventListener("click", playAudio);

// Button press counter code
const countElement = document.getElementById("count");
id = "count";
let count = 0;

if (typeof Storage !== "undefined") {
  if (localStorage.clickcount) {
    count = Number(localStorage.clickcount);
    countElement.textContent = `You have OBISA'd ${count} times.`;
  }
}

button.addEventListener("click", () => {
  count++;
  localStorage.clickcount = count;
  countElement.textContent = `You have OBISA'd ${count} times.`;
  playAudio();
});

function playAudio() {
  audioElement.currentTime = 0;
  audioElement.play();
}
