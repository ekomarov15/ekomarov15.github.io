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

// Инициализация демо-данных при первом запуске
(function initData() {
    if (!localStorage.getItem('tasks')) {
        // Создаём демо-задание
        const demoTask = {
            id: 'task1',
            text: 'Напишите сочинение на тему "Моя любимая книга".',
            maxScore: 10,
            correctAnswer: 'Любое развёрнутое сочинение, грамотность, структура.',
            createdBy: 'tek',
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('tasks', JSON.stringify([demoTask]));
        
        // Создаём демо-ответ ученика
        const demoSubmission = {
            id: 'sub1',
            taskId: 'task1',
            studentId: 'st1',
            answerText: 'Моя любимая книга — "Война и мир". Она очень интересная.',
            answerImages: [],
            status: 'submitted',
            submittedAt: new Date().toISOString(),
            correctedAnswer: null,
            score: null,
            teacherComment: null
        };
        localStorage.setItem('submissions', JSON.stringify([demoSubmission]));
    }
})();
