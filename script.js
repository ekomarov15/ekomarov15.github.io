let totalScore = 0
let maxScore = 0

function loadTasks(subject) {
const list = document.getElementById('taskList')
list.innerHTML = ''

const filter = document.getElementById('filter')?.value

tasks.filter(t => t.subject === subject)
.filter(t => !filter || t.number == filter)
.forEach(t => {
const div = document.createElement('div')
div.className = 'task-preview'
div.innerHTML = `<h3>Задание ${t.number}</h3><p>Баллы: ${t.maxScore}</p>`
div.onclick = () => location.href = `task.html?id=${t.id}`
list.appendChild(div)
})
}

function loadTask() {
const id = new URLSearchParams(location.search).get('id')
const task = tasks.find(t => t.id == id)
const div = document.getElementById('task')

maxScore += task.maxScore

let html = `<h2>Задание ${task.number}</h2><p>${task.text}</p>`

if (task.type === 'choice') {
task.options.forEach((o, i) => {
html += `<label><input type="radio" name="answer" value="${i}"> ${o}</label><br>`
})
}

if (task.type === 'short') {
html += `<input id="shortAnswer" placeholder="Введите ответ">`
}

if (task.type === 'long') {
html += `<textarea id="longAnswer" rows="6" placeholder="Развёрнутый ответ"></textarea>`
}

html += `<br><button onclick="checkAnswer(${task.id})">Проверить</button>`
html += `<p id="result"></p>`

div.innerHTML = html
}

function checkAnswer(id) {
const task = tasks.find(t => t.id == id)
let score = 0

if (task.type === 'choice') {
const value = document.querySelector('input[name="answer"]:checked')?.value
if (value == task.answer) score = task.maxScore
}

if (task.type === 'short') {
const value = document.getElementById('shortAnswer').value.trim()
if (value === task.answer) score = task.maxScore
}

if (task.type === 'long') {
const text = document.getElementById('longAnswer').value.toLowerCase()
let found = task.keywords.filter(k => text.includes(k)).length
if (found >= 2) score = task.maxScore
else if (found === 1) score = 1
}

totalScore += score
document.getElementById('result').innerText = `Баллы за задание: ${score} / ${task.maxScore}`
}
