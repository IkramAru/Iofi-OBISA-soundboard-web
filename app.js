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
  SpawnChat();

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
  const sound = audioElement.cloneNode();
  sound.play();
}

function SpawnChat() {
  const chat = document.createElement("div");
  
  // 0.01% chance (1 in 10,000) for easter egg idk lol
  if (Math.random() < 0.0001) {
    chat.innerText = "yopi pendek wkwkwk";
  } else {
    const textOptions = ["OBISA!", "OBISA!", "O O O BISA!", "Obisa!", "obisa!"];
    chat.innerText = textOptions[Math.floor(Math.random() * textOptions.length)];
  }
  
  chat.classList.add("flying-text");

  const randomTop = Math.floor(Math.random() * 90);
  chat.style.top = randomTop + "vh";

  const randomSize = (Math.random() * 1.5 + 1.5).toFixed(1);
  chat.style.fontSize = randomSize + "rem";

  const randomDuration = (Math.random() * 3 + 4).toFixed(1);
  chat.style.animationDuration = randomDuration + "s";

  document.body.appendChild(chat);

  setTimeout(() => {
    chat.remove();
  }, randomDuration * 1000 + 100);
}
