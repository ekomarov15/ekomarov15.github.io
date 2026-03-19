// Получение роли из sessionStorage
function getRole() {
    return sessionStorage.getItem('role');
}

// Проверка авторизации, перенаправление на login, если не авторизован
function checkAuth() {
    if (!sessionStorage.getItem('user')) {
        window.location.href = 'login.html';
    }
}

// Работа с localStorage для заданий
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Работа с localStorage для ответов (submissions)
function getSubmissions() {
    return JSON.parse(localStorage.getItem('submissions') || '[]');
}

function saveSubmission(submission) {
    const submissions = getSubmissions();
    submissions.push(submission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
}

function updateSubmission(updatedSub) {
    let submissions = getSubmissions();
    const index = submissions.findIndex(s => s.id === updatedSub.id);
    if (index !== -1) {
        submissions[index] = updatedSub;
        localStorage.setItem('submissions', JSON.stringify(submissions));
    }
}

let user;
try {
    user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!user) {
        // Попробуем взять из localStorage (для обратной совместимости)
        user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            // Если нашли в localStorage, переносим в sessionStorage и удаляем из localStorage
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.removeItem('currentUser');
        }
    }
} catch (e) {
    user = null;
}
if (!user || (user.role !== 'teacher' && user.role !== 'student')) {
    window.location.href = 'login.html';
    return;
}
const role = user.role;
const username = user.username;
