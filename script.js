function loadTasks(subject) {
const list = document.getElementById('taskList')
tasks.filter(t => t.subject === subject).forEach(t => {
const div = document.createElement('div')
div.className = 'task-preview'
div.innerHTML = `<h3>Задание ${t.number}</h3><p>${t.type}</p>`
div.onclick = () => location.href = `task.html?id=${t.id}`
list.appendChild(div)
})
}

function loadTask() {
const id = new URLSearchParams(location.search).get('id')
const task = tasks.find(t => t.id == id)
const div = document.getElementById('task')

let html = `<h2>Задание ${task.number}</h2><p>${task.text}</p>`

if (task.options) {
html += '<ul>'
task.options.forEach(o => html += `<li>${o}</li>`)
html += '</ul>'
}

div.innerHTML = html
}
