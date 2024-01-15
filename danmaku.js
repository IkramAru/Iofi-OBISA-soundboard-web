// Clear indication of loading
console.log("danmaku.js loaded");

// Reference to the danmaku container
const danmakuContainer = document.getElementById("danmakuContainer");

// Function to create and position a danmaku element
function spawnDanmaku(customText) {
  console.log("`spawnDanmaku` function is being called!");

  const danmakuText = document.createElement("span");
  danmakuText.textContent = customText || "OOOBISA!!!";
  danmakuText.classList.add("danmakuText");

  const randomPosition = getRandomPosition();
  console.log("Generated random position:", randomPosition);

  danmakuText.style.top = randomPosition;
  danmakuContainer.appendChild(danmakuText);

  console.log("Danmaku element added to container.");

  return danmakuText; // Return the created element for removal
}

// Function to generate a random position within the viewport
function getRandomPosition() {
  const viewportHeight = window.innerHeight;
  const randomTop = Math.random() * viewportHeight;
  return randomTop + "px";
}

function removeDanmaku(danmaku) {
  setTimeout(() => {
    danmakuContainer.removeChild(danmaku);
  }, 5000);
}

window.spawnDanmaku = spawnDanmaku;
window.removeDanmaku = removeDanmaku;
