const tasks = []

for (let i = 1; i <= 27; i++) {
  const num = String(i).padStart(2, '0')
  tasks.push(require(`./generators/task${num}`))
}

module.exports = () => tasks.map(t => t())
