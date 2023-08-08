<?php
$servername = "hostname";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$event = $_GET['event'];
$searchName = $_GET['name'];

// Construct the SQL query based on the event and search name
$sql = "SELECT * FROM certificates WHERE event = '$event' AND name LIKE '%$searchName%'";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = [
            'name' => $row['name'],
            'event' => $row['event'],
            'downloadLink' => $row['download_link'] // Provide the actual download link
        ];
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($data);
?>
