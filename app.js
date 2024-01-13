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

  // Image swapping logic within the click event listener
  if (mainImage.src.includes("/pic/yopi-chibi-2.png")) {
    mainImage.src = "/pic/yopi-chibi.png";
  } else {
    mainImage.src = "/pic/yopi-chibi-2.png";
  }

  // Temporary image swap with transition and delay
  const originalSrc = mainImage.src; // Store original image URL
  mainImage.src = "/pic/yopi-chibi-2.png"; // Replace with alternative image
  mainImage.style.transition = "transform 0.3s ease-in-out";
  mainImage.style.transform = "translateY(-30px)";

  setTimeout(() => {
    mainImage.style.transform = "translateY(0)";
    mainImage.src = originalSrc; // Revert to original image after delay
  }, 300);
});

function playAudio() {
  audioElement.currentTime = 0;
  audioElement.play();
}

// Idle animation function
function idleAnimation() {
  mainImage.style.transition = "transform 1s ease-in-out";
  mainImage.style.transform = "rotate(-5deg)";

  setTimeout(() => {
    mainImage.style.transform = "rotate(5deg)";
  }, 500);

  setTimeout(() => {
    idleAnimation();
  }, 1000);
}

idleAnimation(); // Start the idle animation
