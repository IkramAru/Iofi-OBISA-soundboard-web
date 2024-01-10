const sounds = ["OBISA!!!"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    const audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
  });

  document.getElementById("buttons").appendChild(btn);
});
