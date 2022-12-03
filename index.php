<?php echo header();

$file = file_get_contents("./README.md");
 echo "<pre style=\"word-wrap: break-word; white-space: pre-wrap;\"> ";
 echo $file;
  echo "</pre>";
