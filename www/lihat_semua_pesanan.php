<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    $QUERY = MYSQLI_QUERY($conn, "SELECT * FROM pesanan");
    
    
    while($ROW = MYSQLI_FETCH_ARRAY($QUERY, MYSQLI_ASSOC)){
        $psn[]= array(
            'id_pesanan' => $ROW['id_pesanan'],
            'judul_pesanan' => $ROW['judul_pesanan'],
            'pengarang_pesanan' => $ROW['pengarang_pesanan'],
            'tanggal' => $ROW['tanggal'],
            'time' => $ROW['time'],
            'id_snack' => $ROW['id_snack'],
            'seat' => $ROW['seat']
        );
    }
    
    header('Content-Type:application/json;charset=utf-8');
    ECHO  JSON_ENCODE($psn, JSON_PRETTY_PRINT);
    MYSQLI_CLOSE($conn);
    
?>