const audioElement = document.getElementById("OBISA!!!");
const button = document.getElementById("obisa-button");
const countElement = document.getElementById("count");
const mainImage = document.getElementById("yopi");

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

  // Image swapping with jumping effect
  if (mainImage.src.includes("picture-A")) {
    mainImage.src = "/pic/yopi-chibi-2.png";
    mainImage.style.transform = "translateY(-30px)";
    setTimeout(() => {
      mainImage.style.transform = "translateY(0)";
    }, 200);
  } else {
    mainImage.src = "/pic/yopi-chibi.png";
    mainImage.style.transform = "translateY(-30px)";
    setTimeout(() => {
      mainImage.style.transform = "translateY(0)";
    }, 200);
  }
});

function playAudio() {
  audioElement.currentTime = 0;
  audioElement.play();
}
