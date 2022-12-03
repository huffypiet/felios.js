<?php header("Content-Type : application/json");

$files = (object) file_get_contents("php://input");

foreach($files as $fileData) $fileData;

// Traversing for file-data
foreach($files as $file) $file = trim(trim(explode("Content-Disposition",explode("Content-Type",$file)[1])[0],": application/x-javascript"),"-");

$h= substr($file,count($file)+7);

$f = substr($file,count($file) - 50 );

$contentMeta = explode(":",substr($fileData,count($fileData) + 115, 40 ));

$filename = base64_encode($contentMeta[0]);

print_r(json_encode(["tmpFilename"=>$filename]));

$content = base64_encode(trim($h,$f));

$fopen = fopen("./drive/".$filename,"w");

		 fwrite($fopen,$content);

$fopen.fclose();

