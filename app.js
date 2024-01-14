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

  if (mainImage.src.includes("/pic/yopi-chibi-2.gif")) {
    mainImage.src = "/pic/yopi-chibi.gif";
  } else {
    mainImage.src = "/pic/yopi-chibi-2.gif";
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
