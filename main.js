"use strict";

let start = document.getElementById("start"),
  resetBtn = document.getElementById("reset"),
  superman = document.getElementById("superman"),
  count = 0,
  animate = true,
  interval;

const move = () => {
  interval = requestAnimationFrame(move);
  count++;
  if (count < 400) {
    superman.style.left = count * 2 + "px";
  } else {
    cancelAnimationFrame(interval);
  }
};

start.addEventListener("click", () => {
  if (animate) {
    start.innerText = "Stop";
    interval = requestAnimationFrame(move);
    animate = false;
  } else {
    animate = true;
    cancelAnimationFrame(interval);
    start.innerText = "Let's go!";
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  superman.style.left = 0;
  cancelAnimationFrame(interval);
});
