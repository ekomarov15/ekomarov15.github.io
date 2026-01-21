// script.js

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.onclick = () => {
  nav.classList.toggle('active');
};

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('active');
  });
});

// Примеры заданий (упрощённо, авторские)
const tasks = {
  oge: [
    { q: "Укажите слово с проверяемой безударной гласной", a: "гора" },
    { q: "Найдите слово с приставкой ПРЕ-", a: "прекрасный" },
    { q: "Укажите предложение с обращением", a: "Друзья, начнём урок" },
    { q: "Определите часть речи слова «бегущий»", a: "причастие" },
    { q: "Найдите слово с чередующейся гласной", a: "растение" }
  ],
  ege: [
    { q: "Укажите средство выразительности", a: "метафора" },
    { q: "Найдите грамматическую основу", a: "подлежащее и сказуемое" },
    { q: "Укажите тип связи словосочетания", a: "управление" },
    { q: "Определите стиль текста", a: "публицистический" },
    { q: "Найдите орфографическую ошибку", a: "неправильно написанное слово" }
  ]
};

function generateTest(type) {
  const count = document.getElementById(`${type}-count`).value;
  const container = document.getElementById(`${type}-test`);
  container.innerHTML = "";

  tasks[type].slice(0, count).forEach((task, i) => {
    container.innerHTML += `
      <div class="task">
        <p><b>${i + 1}.</b> ${task.q}</p>
        <input type="text" data-answer="${task.a}">
      </div>
    `;
  });

  container.innerHTML += `<button onclick="checkTest('${type}')">Проверить</button>`;
}

function checkTest(type) {
  const inputs = document.querySelectorAll(`#${type}-test input`);
  let score = 0;

  inputs.forEach(input => {
    if (input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase()) {
      score++;
      input.style.border = "2px solid green";
    } else {
      input.style.border = "2px solid red";
    }
  });

  alert(`Результат: ${score} из ${inputs.length}`);
}
