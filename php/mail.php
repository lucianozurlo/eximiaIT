<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $mail_to = "lucianozurlo@gmail.com";
    $subject = "Correo de eximiait.com.ar";
    $nombre = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["nombre"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = nl2br($_POST["mensaje"]);

    if ( empty($nombre) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($subject) OR empty($mensaje) ) {
        http_response_code(400);
        echo "Por favor complete el formulario e inténtelo nuevamente.";
        exit;
    }

    $content = "Nombre: $nombre<br>";
    $content .= "Email: $email<br>";
    $content .= "Mensaje:<br>$mensaje<br>";
    $headers = 	"De: " . $email . "\r\n" .
				"MIME-Version: 1.0" . "\r\n" .
				"Content-type: text/html; charset=utf-8" . "\r\n";

    if (mail($mail_to, $subject, $content, $headers)) {
        http_response_code(200);
        echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo "Algo salió mal, no pudimos enviar tu mensaje.";
    }
} else {
	http_response_code(403);
	echo "Hubo un problema con tu envío, intentá de nuevo.";
}
