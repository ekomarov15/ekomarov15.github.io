<?php
/**
 * БАНК ЗАДАНИЙ ОГЭ (ФИПИ)
 * ВЕРСИЯ БЕЗ БД
 * ✔ Задания вынесены в tasks.php
 * ✔ Строгая нумерация заданий ФИПИ
 * ✔ Генерация варианта по структуре ОГЭ
 * ✔ Bootstrap 5
 */

session_start();
$page = $_GET['page'] ?? 'home';

require_once 'tasks.php';

// ---------------- HTML ----------------
function headerHtml($title)
{
    echo "<!doctype html><html lang='ru'><head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>$title</title>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head><body class='bg-light'>
    <nav class='navbar navbar-expand-lg navbar-dark bg-primary mb-4'>
      <div class='container'>
        <a class='navbar-brand' href='?'>Банк ОГЭ</a>
        <div class='navbar-nav'>
          <a class='nav-link' href='?page=subjects'>Предметы</a>
          <a class='nav-link' href='?page=variant'>Вариант ФИПИ</a>
        </div>
      </div>
    </nav>
    <div class='container'>";
}

function footerHtml()
{
    echo "</div></body></html>";
}

// ---------------- HOME ----------------
if ($page === 'home') {
    headerHtml('Банк заданий ОГЭ');
    echo "<div class='card p-4'>
        <h1>Банк заданий ОГЭ</h1>
        <p class='lead'>Русский язык и литература (структура ФИПИ)</p>
    </div>";
    footerHtml();
}

// ---------------- SUBJECTS ----------------
elseif ($page === 'subjects') {
    headerHtml('Предметы');
    foreach ($subjects as $id => $name) {
        echo "<div class='card p-3 mb-3'>
            <h4>$name</h4>
            <a href='?page=variant&subject=$id' class='btn btn-outline-primary'>Собрать вариант</a>
        </div>";
    }
    footerHtml();
}

// ---------------- VARIANT (ФИПИ) ----------------
elseif ($page === 'variant') {
    headerHtml('Вариант ОГЭ');
    $subject = $_GET['subject'] ?? 1;

    // Строгая структура ФИПИ: номер => тип
    $structure = [
        1 => 'choice',
        2 => 'choice',
        3 => 'choice',
        4 => 'short',
        5 => 'short',
        6 => 'short',
        7 => 'choice'
    ];

    $variant = [];
    foreach ($structure as $num => $type) {
        $pool = array_values(array_filter($tasks, fn($t) =>
            $t['subject'] == $subject && $t['fipi'] == $num && $t['type'] == $type
        ));
        if ($pool) {
            $variant[$num] = $pool[array_rand($pool)];
        }
    }

    $_SESSION['variant'] = $variant;

    echo "<form method='post' action='?page=check'>";
    foreach ($variant as $num => $task) {
        echo "<div class='card p-3 mb-3'>
            <strong>Задание $num</strong>
            <p>{$task['question']}</p>";

        if ($task['type'] === 'choice') {
            foreach ($task['options'] as $k => $opt) {
                echo "<div class='form-check'>
                  <input class='form-check-input' type='radio' name='answers[{$task['id']}]' value='" . ($k+1) . "'>
                  <label class='form-check-label'>$opt</label>
                </div>";
            }
        } else {
            echo "<input class='form-control' name='answers[{$task['id']}]'>";
        }
        echo "</div>";
    }
    echo "<button class='btn btn-success'>Проверить</button></form>";
    footerHtml();
}

// ---------------- CHECK ----------------
elseif ($page === 'check') {
    headerHtml('Результат');
    $answers = $_POST['answers'] ?? [];
    $variant = $_SESSION['variant'] ?? [];

    $score = 0;
    $total = 0;

    echo "<h2 class='mb-4'>Результаты</h2>";

    foreach ($variant as $num => $task) {
        $total += $task['score'];
        $id = $task['id'];
        $userAnswer = $answers[$id] ?? '';
        $isCorrect = trim($userAnswer) == trim($task['answer']);

        if ($isCorrect) {
            $score += $task['score'];
        }

        echo "<div class='card mb-3 p-3'>";
        echo "<strong>Задание $num</strong><br>";
        echo "<p>{$task['question']}</p>";

        if ($task['type'] === 'choice') {
            $correctText = $task['options'][$task['answer'] - 1];
            $userText = $userAnswer ? $task['options'][$userAnswer - 1] : '—';
            echo "<p>Ваш ответ: <strong>$userText</strong></p>";
            echo "<p>Правильный ответ: <strong>$correctText</strong></p>";
        } else {
            echo "<p>Ваш ответ: <strong>$userAnswer</strong></p>";
            echo "<p>Правильный ответ: <strong>{$task['answer']}</strong></p>";
        }

        echo $isCorrect
            ? "<div class='alert alert-success'>Верно</div>"
            : "<div class='alert alert-danger'>Неверно</div>";

        echo "</div>";
    }

    echo "<div class='alert alert-info'>
        <h3>Итог: $score из $total баллов</h3>
    </div>
    <a href='?page=variant' class='btn btn-primary'>Новый вариант</a>";

    footerHtml();
}
}

else {
    headerHtml('404');
    echo "Страница не найдена";
    footerHtml();
}
