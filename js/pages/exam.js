const variant = JSON.parse(localStorage.getItem("variant")) || [];
const answers = JSON.parse(localStorage.getItem("answers")) || {};
const container = document.getElementById("tasks");

variant.forEach((v, i) => {
  container.innerHTML += `
    <div class="card task">
      <div class="task-number">Задание ${v.num}</div>
      <p style="font-size:18px">${v.task.text}</p>
      <textarea id="a-${i}">${answers[i] || ""}</textarea>
      <button onclick="save(${i})">Сохранить</button>
    </div>
  `;
});

function save(i) {
  answers[i] = document.getElementById(`a-${i}`).value;
  localStorage.setItem("answers", JSON.stringify(answers));
}
