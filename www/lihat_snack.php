<?php
    REQUIRE_ONCE('koneksi.php');
    $QUERY = MYSQLI_QUERY($conn, "SELECT * FROM snack");
    
    
    while($ROW = MYSQLI_FETCH_ARRAY($QUERY, MYSQLI_ASSOC)){
        $snack[]= array(
            'id_snack' => $ROW['id_snack'],
            'nama_snack' => $ROW['nama_snack'],
            'ket_snack' => $ROW['ket_snack'],
            'harga_snack' => $ROW['harga_snack']
        );
    }
    
    header('Content-Type:application/json;charset=utf-8');
    ECHO  JSON_ENCODE($snack, JSON_PRETTY_PRINT);
    MYSQLI_CLOSE($conn);
    
?>