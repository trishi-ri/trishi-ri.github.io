<?php
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "testkoeing@trishi-ri.ru";
$sub = "Сообщение с сайта trishi-ri.ru";
 
/* Формат письма */
$mes = "Сообщение с сайта trishi-ri.ru.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Текст сообщения:
$message";
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
  echo "true";
} else {
  echo "false";
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>