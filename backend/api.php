<?php
header("Content-Type: application/json");
require_once __DIR__ . "/class.php";
$categories = new Category();
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $data = file_get_contents(__DIR__ . "/data/data.json");
    echo $data;
}
elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $newcategory = $categories->addCategory(
        $data["nom"],
        $data["description"]
    );
    echo json_encode($newcategory);
}
?>
