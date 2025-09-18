<?php
// Проверяем, что запрос был отправлен методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Настройка получателя и темы письма
    $to = "orders.jicprint@gmail.com";
    $subject = "Новая заявка на 3D-печать";

    // 2. Сбор данных из формы
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $material = htmlspecialchars($_POST['material']);
    $color = htmlspecialchars($_POST['color']);
    $quantity = htmlspecialchars($_POST['quantity']);
    $description = htmlspecialchars($_POST['message']);

    // 3. Формирование тела письма
    $email_body = "Имя: $firstName\n";
    $email_body .= "Фамилия: $lastName\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Телефон: $phone\n";
    $email_body .= "Материал: $material\n";
    $email_body .= "Цвет: $color\n";
    $email_body .= "Количество: $quantity\n";
    $email_body .= "Описание проекта:\n$description\n";

    // 4. Обработка загруженного файла
    $file_attached = false;
    $attachment = '';
    $file_name = '';

    if (isset($_FILES['files']) && $_FILES['files']['error'] == UPLOAD_ERR_OK) {
        $file_name = $_FILES['files']['name'];
        $file_path = $_FILES['files']['tmp_name'];

        // Чтение содержимого файла
        $file_content = file_get_contents($file_path);
        $file_content = chunk_split(base64_encode($file_content));

        // Формирование заголовков для вложения
        $boundary = md5(time());
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From: $email\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

        $attachment = "--$boundary\r\n";
        $attachment .= "Content-Type: application/octet-stream; name=\"$file_name\"\r\n";
        $attachment .= "Content-Transfer-Encoding: base64\r\n";
        $attachment .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $attachment .= "\r\n" . $file_content . "\r\n";
        $attachment .= "--$boundary--";

        $message = "--$boundary\r\n";
        $message .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
        $message .= "Content-Transfer-Encoding: 7bit\r\n";
        $message .= "\r\n" . $email_body . "\r\n";
        $message .= $attachment;

        $file_attached = true;
    } else {
        // Если файла нет, просто отправляем письмо без вложения
        $headers = "From: $email\r\n";
        $message = $email_body;
    }

    // 5. Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        // Успешная отправка, можно перенаправить пользователя или показать сообщение
        header("Location: thank_you.html");
    } else {
        // Ошибка при отправке
        header("Location: error.html");
    }

} else {
    // Если запрос не POST, перенаправляем
    header("Location: index.html");
}
?>
