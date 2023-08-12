<?php

// несколько получателей
$to = 'phone9096311341@gmail.com';

// тема письма
$subject = 'Письмо с сыйта';

// текст письма
$message = 'Название компании: ' . $_POST['company'] . '<br />' .
    'Ссылка на сайт/соцсети: ' . $_POST['link'] . '<br />' .
    'ФИО: ' . $_POST['name'] . '<br />' .
    'Должность: ' . $_POST['position'] . '<br />' .
    'Телефон: ' . '<a href="tel:' . $_POST['phone'] . '">' . $_POST['phone'] . '</a>' . '<br />' .
    'Почта: ' . '<a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>' . '<br />' .
    'Link to portfolio: ' . '<a href="' . $_POST['portfolio'] . '">' . $_POST['portfolio'] . '</a>' . '<br />' .
    'Текст о компании:' . $_POST['message'] . '<br />' .


// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Отправляем
mail($to, $subject, $message, $headers);

