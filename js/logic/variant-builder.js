const exam = localStorage.getItem("exam");
const structure = exam === "oge" ? OGE_STRUCTURE : EGE_STRUCTURE;
const bank = exam === "oge" ? OGE_BANK : EGE_BANK;

const container = document.getElementById("builder");

// интерфейс как на sdamgia
for (let num in structure) {
  container.innerHTML += `
    <div class="task-row">
      <div>
        <b>Задание ${num}</b><br>
        <span class="muted">${structure[num].name}</span>
      </div>
      <input type="number" min="0" value="0" id="count-${num}">
    </div>
  `;
}

function buildVariant() {
  let variant = [];

  for (let num in structure) {
    const count = +document.getElementById(`count-${num}`).value;
    if (!bank[num]) continue;

    const shuffled = [...bank[num]].sort(() => Math.random() - 0.5);
    variant.push(...shuffled.slice(0, count).map(task => ({
      num,
      task
    })));
  }

  localStorage.setItem("variant", JSON.stringify(variant));
  location.href = "exam.html";
}
