<?php
// Read entries from file
$entries = file("entries.txt");

// Output each entry
foreach ($entries as $index => $entry) {
    echo "<div class='entry'><strong>" . ($index + 1) . ". Entry:</strong> " . $entry . "</div>";
}
?>
