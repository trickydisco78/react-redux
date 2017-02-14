//keyboard event listener

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(audio);
  // If no audio stop running
  if (!audio) return;
  audio.play();
});

// Mouse click

const button = document.getElementById("button");

button.addEventListener("click", function(event) {
  button.classList.add("show");
});
