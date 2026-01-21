// 🔧 ВАЖНО:
// если backend запущен локально — оставь localhost
// если задеплоен — замени на URL Render
const API_URL = 'http://localhost:3000/api/variant'

let examData = []
let userAnswers = {}

// =================== ТАЙМЕР ===================
let time = 3 * 60 * 60 + 30 * 60

function startTimer() {
  const timerEl = document.getElementById('timer')

  setInterval(() => {
    const h = String(Math.floor(time / 3600)).padStart(2, '0')
    const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
    const s = String(time % 60).padStart(2, '0')

    timerEl.textContent = `${h}:${m}:${s}`

    if (time <= 0) finishExam()
    time--
  }, 1000)
}

// =================== ЗАГРУЗКА ===================
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    examData = data
    renderTasks(data)
    startTimer()
  })
  .catch(err => {
    document.getElementById('tasks').innerHTML =
      '❌ Не удалось загрузить задания. Запусти backend.'
    console.error(err)
  })

function renderTasks(tasks) {
  const container = document.getElementById('tasks')
  container.innerHTML = ''

  tasks.forEach(task => {
    const div = document.createElement('div')
    div.className = 'task'

    let html = `<h3>Задание ${task.number}</h3><p>${task.text}</p>`

    if (task.answers && task.answers.length) {
      task.answers.forEach((a, i) => {
        html += `
          <label class="answer">
            <input type="radio"
              name="task${task.number}"
              value="${i}"
              onchange="saveAnswer(${task.number}, ${i})">
            ${a}
          </label><br>
        `
      })
    } else {
      html += `<textarea rows="6" style="width:100%"></textarea>`
    }

    div.innerHTML = html
    container.appendChild(div)
  })
}

function saveAnswer(task, value) {
  userAnswers[task] = value
}

// =================== ЗАВЕРШЕНИЕ ===================
document.getElementById('finishBtn').onclick = finishExam

function finishExam() {
  let score = 0

  examData.forEach(t => {
    if (t.correct !== null && userAnswers[t.number] === t.correct) {
      score++
    }
  })

  showResults(score)
}

// =================== РЕЗУЛЬТАТ ===================
function showResults(score) {
  const container = document.getElementById('tasks')
  container.innerHTML = `<h2>Результат: ${score} / 26</h2>`

  examData.forEach(task => {
    let html = `<div class="task"><h3>Задание ${task.number}</h3>`

    if (task.answers && task.answers.length) {
      task.answers.forEach((a, i) => {
        let cls = ''
        if (i === task.correct) cls = 'correct'
        if (userAnswers[task.number] === i && i !== task.correct) cls = 'wrong'
        html += `<div class="${cls}">${a}</div>`
      })
      html += `<p><b>Пояснение:</b> ${task.explanation}</p>`
    } else {
      html += `<p><i>Сочинение проверяется отдельно</i></p>`
    }

    html += `</div>`
    container.innerHTML += html
  })
}
