const API_URL = 'http://localhost:3000/api/variant'

// ====== ТАЙМЕР ======
let time = 3 * 60 * 60 + 30 * 60 // 3 часа 30 минут

function updateTimer() {
  const h = String(Math.floor(time / 3600)).padStart(2, '0')
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const s = String(time % 60).padStart(2, '0')

  document.getElementById('timer').textContent = `${h}:${m}:${s}`

  if (time <= 0) {
    finishExam()
  }

  time--
}

setInterval(updateTimer, 1000)

// ====== ЗАГРУЗКА ВАРИАНТА ======
fetch(API_URL)
  .then(res => res.json())
  .then(renderTasks)

function renderTasks(tasks) {
  const container = document.getElementById('tasks')

  tasks.forEach(task => {
    const block = document.createElement('div')
    block.className = 'task'

    let html = `<h3>Задание ${task.number}</h3><p>${task.text}</p>`

    if (task.answers && task.answers.length > 0) {
      task.answers.forEach((a, i) => {
        html += `
          <div class="answer">
            <label>
              <input type="radio" name="task${task.number}" value="${i}">
              ${a}
            </label>
          </div>
        `
      })
    } else {
      html += `<textarea rows="6" style="width:100%" placeholder="Введите ответ..."></textarea>`
    }

    block.innerHTML = html
    container.appendChild(block)
  })
}

// ====== ЗАВЕРШЕНИЕ ЭКЗАМЕНА ======
function finishExam() {
  alert('Экзамен завершён! (проверка и баллы — следующий этап)')
  window.location.href = 'index.html'
}
const API_URL = 'http://localhost:3000/api/variant'

// ====== ТАЙМЕР ======
let time = 3 * 60 * 60 + 30 * 60 // 3 часа 30 минут

function updateTimer() {
  const h = String(Math.floor(time / 3600)).padStart(2, '0')
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const s = String(time % 60).padStart(2, '0')

  document.getElementById('timer').textContent = `${h}:${m}:${s}`

  if (time <= 0) {
    finishExam()
  }

  time--
}

setInterval(updateTimer, 1000)

// ====== ЗАГРУЗКА ВАРИАНТА ======
fetch(API_URL)
  .then(res => res.json())
  .then(renderTasks)

function renderTasks(tasks) {
  const container = document.getElementById('tasks')

  tasks.forEach(task => {
    const block = document.createElement('div')
    block.className = 'task'

    let html = `<h3>Задание ${task.number}</h3><p>${task.text}</p>`

    if (task.answers && task.answers.length > 0) {
      task.answers.forEach((a, i) => {
        html += `
          <div class="answer">
            <label>
              <input type="radio" name="task${task.number}" value="${i}">
              ${a}
            </label>
          </div>
        `
      })
    } else {
      html += `<textarea rows="6" style="width:100%" placeholder="Введите ответ..."></textarea>`
    }

    block.innerHTML = html
    container.appendChild(block)
  })
}

// ====== ЗАВЕРШЕНИЕ ЭКЗАМЕНА ======
function finishExam() {
  alert('Экзамен завершён! (проверка и баллы — следующий этап)')
  window.location.href = 'index.html'
}
