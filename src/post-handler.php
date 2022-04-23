<?php header("Content-Type : application/json");

$file = file_get_contents("php://input");
$file = json_decode($file);

print_r($file->raw);


