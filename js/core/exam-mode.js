let time = localStorage.getItem("examType") === "oge" ? 235*60 : 210*60;

setInterval(() => {
  time--;
  document.getElementById("timer").innerText =
    Math.floor(time/60)+":"+String(time%60).padStart(2,"0");
  if (time <= 0) location.href = "result.html";
}, 1000);
