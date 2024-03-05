import { removeDanmaku } from './app.js';

console.log("danmaku.js loaded");

export function spawnDanmaku(danmakuElements, customText) {
  const danmakuContainer = document.getElementById("danmakuContainer");

  console.log("`spawnDanmaku` function is being called!");

  const danmakuText = document.createElement("span");
  danmakuText.textContent = customText || "OOOBISA!!!";
  danmakuText.classList.add("danmakuText");

  const randomPosition = getRandomPosition();
  console.log("Generated random position:", randomPosition);

  danmakuText.style.top = randomPosition;
  danmakuContainer.appendChild(danmakuText);

  console.log("Danmaku element added to container.");

  danmakuElements.push(danmakuText); // Push the created element

  danmakuText.addEventListener("animationend", () => {
    removeDanmaku(danmakuText);
  });
}

function getRandomPosition() {
  const viewportHeight = window.innerHeight;
  const randomTop = Math.random() * viewportHeight;
  return randomTop + "px";
}
