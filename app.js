import { spawnDanmaku } from './danmaku.js';

const audioElement = document.getElementById("OBISA!!!");
const button = document.getElementById("obisa-button");
const countElement = document.getElementById("count");
const mainImage = document.getElementById("yopi");

const danmakuElements = [];

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

  if (mainImage.src.includes("/pic/yopi-chibi-2.gif")) {
    mainImage.src = "/pic/yopi-chibi.gif";
  } else {
    mainImage.src = "/pic/yopi-chibi-2.gif";
  }

  mainImage.style.transition = "transform 0.3s ease-in-out";
  mainImage.style.transform = "translateY(-30px)";
  setTimeout(() => {
    mainImage.style.transform = "translateY(0)";
  }, 300)
  spawnDanmaku(danmakuElements, "OOOBISA!!!");
});

function playAudio() {
  audioElement.currentTime = 0;
  audioElement.play();
}

function removeDanmaku(element) {
  element.parentNode.removeChild(element);
  danmakuElements.splice(danmakuElements.indexOf(element), 1);
}
