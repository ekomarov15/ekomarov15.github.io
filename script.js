// script.js

const exam = localStorage.getItem("exam");

const BANK = exam === "oge" ? OGE_BANK : EGE_BANK;
const constructorDiv = document.getElementById("constructor");

// ---------- РЕНДЕР КОНСТРУКТОРА ----------
if (constructorDiv) {
  Object.keys(BANK).forEach(type => {
    const max = BANK[type].length;
    constructorDiv.innerHTML += `
      <div class="task">
        <b>${type}</b><br>
        Количество:
        <input type="number" min="0" max="${max}" value="1" data-type="${type}">
      </div>
    `;
  });
}

// ---------- ПЕРЕМЕШИВАНИЕ ----------
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ---------- СБОРКА ВАРИАНТА ----------
function buildVariant() {
  let variant = [];

  document.querySelectorAll("input[data-type]").forEach(input => {
    const type = input.dataset.type;
    const count = Number(input.value);

    const pool = shuffle([...BANK[type]]).slice(0, count);
    variant.push(...pool.map(t => ({ ...t, taskType: type })));
  });

  localStorage.setItem("variant", JSON.stringify(variant));
  location.href = "variant.html";
}
