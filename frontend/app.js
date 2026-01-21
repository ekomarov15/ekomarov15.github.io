function loadVariant() {
  fetch('http://localhost:3000/api/variant')
    .then(res => res.json())
    .then(tasks => {
      const container = document.getElementById('tasks')
      container.innerHTML = ''

      tasks.forEach(t => {
        const div = document.createElement('div')
        div.className = 'task'
        div.innerHTML = `<b>Задание ${t.number}</b><br>${t.text}<br>` +
          (t.answers || []).map((a, i) => `${i + 1}) ${a}`).join('<br>')
        container.appendChild(div)
      })
    })
}
