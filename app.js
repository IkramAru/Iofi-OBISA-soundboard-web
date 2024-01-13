const audioElement = document.getElementById("OBISA!!!");
const button = document.getElementById("obisa-button");
const countElement = document.getElementById("count");
const mainImage = document.getElementById("yopi");

let count = 0;

// Removed the isOriginalImage flag, as it's not needed for continuous image swapping

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

  // Image swapping logic within the click event listener
  if (mainImage.src.includes("/pic/yopi-chibi-2.png")) { // Use string comparison to determine current image
    mainImage.src = "/pic/yopi-chibi.png"; // Change to original image
  } else {
    mainImage.src = "/pic/yopi-chibi-2.png"; // Change to alternative image
  }

  // Transition effect for a smoother visual experience
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
