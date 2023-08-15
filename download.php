<?php
// Mendapatkan nama dari parameter yang dikirimkan dari form
$name = $_POST['download_sertifikat'];

// Koneksi ke database MySQL
$host = "localhost";
$username = "u1573766_admin";
$password = "perdamisumbar";
$dbname = "u1573766_db_certificates";

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Membuat query untuk mendapatkan sertifikat berdasarkan nama
$sql = "SELECT * FROM certificates WHERE name='$name'";
$result = mysqli_query($conn, $sql);

// Jika sertifikat ditemukan
if (mysqli_num_rows($result) > 0) {
    // Mendapatkan data sertifikat
    $row = mysqli_fetch_assoc($result);
    $filename = $row['filename'];

    // Mendownload file sertifikat
    header("Content-Type: application/pdf");
    header("Content-Disposition: attachment; filename=$filename");
    readfile("uploads/$filename");
} else {
    // Jika sertifikat tidak ditemukan, kembali ke halaman utama
    header("Location: index.html");
}

mysqli_close($conn);
