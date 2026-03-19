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
        // Создаём задание №5.2
        const task = {
            id: 'task5.2',
            text: `Задание № 5.2\nФамусовское общество и его представители (по пьесе «Горе от ума» А.С.Грибоедова).\nТребования: не менее двух тезисов, примеры из текста, одно теоретико-литературное понятие, не менее 150 слов.`,
            maxScore: 10,
            correctAnswer: 'Любое развёрнутое сочинение с опорой на текст.',
            createdBy: 'tek',
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('tasks', JSON.stringify([task]));

        // Создаём проверенную работу с пометками (точь-в-точь как на фото)
        const correctedHTML = `
            <p>5.2. После войны 1812 года в обществе сложилось два политических лагеря: лагерь передовой дворянской молодежи и феодально-крепостной лагерь. Идеологиями-выразителями "века минувшего" и "века нынешнего" являются Павел Афанасьевич Фамусов и Александр Андреевич Чацкий. Все гости в доме Фамусова на стороне хозяина, поэтому "век нынешний" называется "фамусовским обществом". Столкновение двух противоборствующих позиций нашло своё отражение в комедии А.С. Грибоедова "Горе от ума".</p>
            <p style="position: relative;"><span class="margin-note">✓</span>Идеалом Фамусова является Максим Петрович, который заслужил расположение императрицы, падая нарочно к ней в ноги. Этот пример иллюстрирует, что для "фамусовского общества" чин<span class="teacher-note" data-note="опечатка: 'чинь' → 'чины'">ь</span> и звания являются высшими нравственными ценностями.</p>
            <p>Павел Афанасьевич смотрит на службу как на источник личного возвышения в обществе. Он готов льстить, чтобы добиться уважения от людей, которые находятся выше его по службе.</p>
            <p>По мнению Фамусова, книги - источник вольнодумства в обществе, что является главной опасностью для представителей консервативного дворянства. Павел Афанасьевич говорит: "Уж коли зло пресечь; / Забрать все книги бы да сжечь". Один из родственников Фамусова, который работает в Учёном комитете выступает против образования. Также Сказоуб говорит насчёт школ, гимназий и университетов: "«Я вас обращу»: всеобщая мода, / Что есть проект насчёт лицеев, школ, гимназий; / Там будут лишь учить по-нашему: раз, два; / А книги сохранят так: для больших оказий». Эти примеры иллюстрируют негативное отношение феодально-крепостного общества к образованию.</p>
            <p style="position: relative;"><span class="margin-note">тавтология</span><span class="teacher-note" data-note="повтор">Отношение</span> Фамусовского общества к иностранному неоднозначно. С одной стороны, Павел Афанасьевич рад видеть в своём доме иностранного гостя, а также представители крепостного дворянства всегда стараются подражать западу. С другой - Фамусов понимает, что европейская культура несёт опасную для их общества идею - стремление к личной свободе.</p>
            <p>Таким образом, представители фамусовского общества <span class="correction">стремится</span> <span class="fixed">стремятся</span> получить высокое положение в обществе, несмотря на цели достижения.</p>
        `;

        const submission = {
            id: 'sub1',
            taskId: 'task5.2',
            studentId: 'st1',
            answerText: '5.2. После войны 1812 года... (текст сочинения)', // можно оставить коротко
            answerImages: [],
            status: 'checked',
            submittedAt: new Date().toISOString(),
            correctedAnswer: correctedHTML,
            score: 9,
            teacherComment: 'Это очень сильная работа, отличный язык, просто умница! Речевых недочетов - единицы, их доработать, и будет просто идеально.\n✔ Исправлено: тавтология, "чинь" → "чины", "стремится" → "стремятся".'
        };
        localStorage.setItem('submissions', JSON.stringify([submission]));
    }
})();
