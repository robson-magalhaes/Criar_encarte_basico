<?php
$params = http_build_query(array(
    "access_key" => "e7fd9d999f9c4ab2854f3aabcfff36ae",
    "url" => "https://robson-magalhaes.github.io/Criar_encarte_basico/criarEncarte.html",
    "element"=> "main"
));

$image_data = file_get_contents("https://api.apiflash.com/v1/urltoimage?" . $params);
file_put_contents("screenshot.jpeg", $image_data);

header('Location:'.'criarEncarte.html');