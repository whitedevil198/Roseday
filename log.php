<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = trim($_POST['message']);
    if (!empty($message)) {
        $logEntry = date("Y-m-d H:i:s") . " - " . $message . "\n";
        file_put_contents("log.txt", $logEntry, FILE_APPEND);
    }
}
?>
