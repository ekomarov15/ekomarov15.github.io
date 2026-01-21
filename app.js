document.addEventListener('DOMContentLoaded', () => {
  const egeBtn = document.getElementById('egeBtn')

  if (egeBtn) {
    egeBtn.addEventListener('click', () => {
      // переход на страницу экзамена
      window.location.href = 'ege.html'
    })
  }
})
