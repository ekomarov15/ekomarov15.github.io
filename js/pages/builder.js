const container = document.getElementById("builder");

for (let num in OGE_STRUCTURE) {
  container.innerHTML += `
    <div class="card">
      <b>Задание ${num}</b> — ${OGE_STRUCTURE[num].name}<br>
      <input type="number" min="0" value="0" id="count-${num}">
    </div>
  `;
}

function build() {
  let variant = [];

  for (let num in OGE_STRUCTURE) {
    let count = +document.getElementById(`count-${num}`).value;
    if (!OGE_BANK[num]) continue;

    let shuffled = [...OGE_BANK[num]].sort(() => Math.random() - 0.5);
    shuffled.slice(0, count).forEach(t =>
      variant.push({ num, task: t })
    );
  }

  localStorage.setItem("variant", JSON.stringify(variant));
  location.href = "exam.html";
}
