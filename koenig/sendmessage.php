<?php
  $sendto   = "trishi-ri@ya.ru"; // Обязательно измените e-mail на свой
  $usermail = $_POST['email'];
  $username = $_POST['name'];
  $content  = nl2br($_POST['message']);
  // Формирование заголовка письма
  $subject  = "Новое сообщение";
  $headers  = "From: " . strip_tags($usermail) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
  // Формирование тела письма
  $msg  = "<html><body style='font-family:Arial,sans-serif;'>";
  $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новое сообщение</h2>\r\n";
  $msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
  $msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
  $msg .= "<p><strong>Сообщение:</strong> ".$content."</p>\r\n";
  $msg .= "</body></html>";
  // отправка сообщения
  if(@mail($sendto, $subject, $msg, $headers, "-ftestkoeing@trishi-ri.ru")) {
   echo "true";
  } else {
   echo "false";
  }
?>