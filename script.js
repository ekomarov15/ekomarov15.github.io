let exam = localStorage.getItem("exam");
let variant = [];

function selectExam(type) {
  localStorage.setItem("exam", type);
  location.href = "constructor.html";
}

function createVariant() {
  // упрощённый пример
  variant = [
    { q: "Укажите слово с проверяемой гласной", a: "гора" },
    { q: "Определите часть речи слова «бегущий»", a: "причастие" }
  ];
  localStorage.setItem("variant", JSON.stringify(variant));
  location.href = "variant.html";
}

if (location.pathname.includes("variant")) {
  const data = JSON.parse(localStorage.getItem("variant") || "[]");
  const container = document.getElementById("variant");
  data.forEach((t, i) => {
    container.innerHTML += `
      <div class="task">
        <b>${i + 1}.</b> ${t.q}
        <input type="text" data-answer="${t.a}">
      </div>
    `;
  });
}

function checkVariant() {
  let score = 0;
  document.querySelectorAll("input").forEach(i => {
    if (i.value.trim().toLowerCase() === i.dataset.answer) score++;
  });
  localStorage.setItem("result", score);
  location.href = "results.html";
}

if (location.pathname.includes("results")) {
  document.getElementById("result").textContent =
    "Ваш результат: " + localStorage.getItem("result");
}
