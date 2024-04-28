<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST["date"];
    $shortDetails = $_POST["shortDetails"];
    
    // Append the entry to a file
    $entry = $date . "|" . $shortDetails . PHP_EOL;
    file_put_contents("entries.txt", $entry, FILE_APPEND);

    // Redirect back to the main page
    header("Location: save_entry.php");
    exit();
}
?>
