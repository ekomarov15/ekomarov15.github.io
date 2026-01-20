let time = 235 * 60;
const t = document.getElementById("timer");

setInterval(() => {
  time--;
  t.innerText =
    Math.floor(time/60) + ":" + String(time%60).padStart(2,"0");
}, 1000);
