const API_URL = 'http://localhost:3000/api/variant'

let examData = []
let userAnswers = {}

// ====== ТАЙМЕР ======
let time = 3 * 60 * 60 + 30 * 60

function updateTimer() {
  const h = String(Math.floor(time / 3600)).padStart(2, '0')
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const s = String(time % 60).padStart(2, '0')

  document.getElementById('timer').textContent = `${h}:${m}:${s}`

  if (time <= 0) finishExam()
  time--
}
setInterval(updateTimer, 1000)

// ====== ЗАГРУЗКА ВАРИАНТА ======
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    examData = data
    renderTasks(data)
  })

function renderTasks(tasks) {
  const container = document.getElementById('tasks')

  tasks.forEach(task => {
    const block = document.createElement('div')
    block.className = 'task'
    block.id = `task-${task.number}`

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
      html += `
        <textarea rows="6" style="width:100%"
        placeholder="Введите ответ (27 задание)"></textarea>
      `
    }

    block.innerHTML = html
    container.appendChild(block)
  })
}

function saveAnswer(taskNumber, value) {
  userAnswers[taskNumber] = value
}

// ====== ЗАВЕРШЕНИЕ И ПРОВЕРКА ======
function finishExam() {
  let score = 0

  examData.forEach(task => {
    if (task.correct !== null && userAnswers[task.number] === task.correct) {
      score++
    }
  })

  showResults(score)
}

// ====== ПОКАЗ РЕЗУЛЬТАТОВ ======
function showResults(score) {
  const container = document.getElementById('tasks')
  container.innerHTML = `<h2>Результат: ${score} / 26</h2>`

  examData.forEach(task => {
    const user = userAnswers[task.number]
    const correct = task.correct

    let resultHTML = `
      <div class="task">
        <h3>Задание ${task.number}</h3>
        <p>${task.text}</p>
    `

    if (task.answers && task.answers.length) {
      task.answers.forEach((a, i) => {
        let cls = ''
        if (i === correct) cls = 'correct'
        if (i === user && i !== correct) cls = 'wrong'

        re
