const audioElement = document.getElementById("OBISA!!!");
const button = document.getElementById("obisa-button");
const countElement = document.getElementById("count");
const mainImage = document.getElementById("yopi");

let count = 0;
let originalImageSrc = mainImage.src;

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
  SpawnChat(); // Trigger flying text

  if (mainImage.src.includes("/pic/yopi-chibi-2.gif")) {
    mainImage.src = "./pic/yopi-chibi.gif";
  } else {
    mainImage.src = "./pic/yopi-chibi-2.gif";
  }

  mainImage.style.transition = "transform 0.3s ease-in-out";
  mainImage.style.transform = "translateY(-30px)";
  setTimeout(() => {
    mainImage.style.transform = "translateY(0)";
  }, 300);
});

function playAudio() {
  audioElement.currentTime = 0;
  audioElement.play();
}

function SpawnChat() {
  const chat = document.createElement("div");
  chat.innerText = "OBISA!";
  chat.classList.add("flying-text");

  // Random vertical position (0% to 90% of viewport height)
  const randomTop = Math.floor(Math.random() * 90);
  chat.style.top = randomTop + "vh";

  // Random font size (1.5rem to 3rem) for variety
  const randomSize = (Math.random() * 1.5 + 1.5).toFixed(1);
  chat.style.fontSize = randomSize + "rem";

  // Random animation duration (4s to 7s) for natural feel
  const randomDuration = (Math.random() * 3 + 4).toFixed(1);
  chat.style.animationDuration = randomDuration + "s";

  document.body.appendChild(chat);

  // Remove element after animation finishes
  // A bit longer than the longest duration to be safe
  setTimeout(() => {
    chat.remove();
  }, randomDuration * 1000 + 100);
}
