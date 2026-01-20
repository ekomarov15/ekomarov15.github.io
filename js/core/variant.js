let current = 1;
let answers = {};

function loadTask() {
  const structure = getStructure();
  const bank = getBank();

  if (!structure[current]) {
    localStorage.setItem("answers", JSON.stringify(answers));
    location.href = "result.html";
    return;
  }

  document.getElementById("task").innerText =
    bank[current]?.[0]?.text || "Задание";
}

function nextTask() {
  answers[current] = document.getElementById("answer").value;
  document.getElementById("answer").value = "";
  current++;
  loadTask();
}

loadTask();
