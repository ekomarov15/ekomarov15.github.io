// script.js

const data = {
  oge: {
    spelling: [
      { q: "Укажите слово с проверяемой гласной", a: "гора" },
      { q: "Найдите слово с приставкой ПРЕ-", a: "прекрасный" }
    ],
    grammar: [
      { q: "Определите часть речи слова «читающий»", a: "причастие" }
    ],
    syntax: [
      { q: "Укажите предложение с однородными членами", a: "Лес шумел и пел" }
    ]
  },
  ege: {
    lexic: [
      { q: "Укажите средство выразительности", a: "метафора" }
    ],
    punctuation: [
      { q: "Укажите предложение с обособленным обстоятельством", a: "Поднявшись, он ушёл" }
    ],
    text: [
      { q: "Определите тему текста", a: "дружба" }
    ]
  }
};

function generateVariant(type) {
  const container = document.getElementById(`${type}-variant`);
  container.innerHTML = "";
  let index = 1;

  document.querySelectorAll(`#${type} input[type="checkbox"]`).forEach(cb => {
    if (cb.checked) {
      const t = cb.dataset.type;
      const count = document.querySelector(`[data-count="${t}"]`).value;
      data[type][t].slice(0, count).forEach(task => {
        container.innerHTML += `
          <div class="task">
            <p><b>${index++}.</b> ${task.q}</p>
            <input type="text" data-answer="${task.a}">
          </div>
        `;
      });
    }
  });

  container.innerHTML += `<button onclick="check('${type}')">Проверить</button>`;
}

function check(type) {
  const inputs = document.querySelectorAll(`#${type}-variant input`);
  let score = 0;

  inputs.forEach(i => {
    if (i.value.trim().toLowerCase() === i.dataset.answer.toLowerCase()) {
      score++;
      i.style.border = "2px solid green";
    } else {
      i.style.border = "2px solid red";
    }
  });

  saveResult(type, score, inputs.length);
  alert(`Результат: ${score} / ${inputs.length}`);
  loadResults();
}

function saveResult(type, score, total) {
  const results = JSON.parse(localStorage.getItem("results") || "[]");
  results.push({
    date: new Date().toLocaleString(),
    exam: type.toUpperCase(),
    score
  });
  localStorage.setItem("results", JSON.stringify(results));
}

function loadResults() {
  const list = document.getElementById("results-list");
  list.innerHTML = "";
  const results = JSON.parse(localStorage.getItem("results") || "[]");
  results.forEach(r => {
    list.innerHTML += `<li>${r.date} — ${r.exam}: ${r.score}</li>`;
  });
}

loadResults();
