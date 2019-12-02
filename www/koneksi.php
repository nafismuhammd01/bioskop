<?php
$servername = "localhost";
$database = "pitihden_bioskop";
$username = "pitihden_nafis";
$password = "tugasppk123";

// untuk tulisan bercetak tebal silakan sesuaikan dengan detail database Anda
// membuat koneksi
$conn = mysqli_connect($servername, $username, $password, $database);
// mengecek koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>