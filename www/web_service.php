<?php
    REQUIRE_ONCE('koneksi.php');
    $QUERY = MYSQLI_QUERY($conn, "SELECT * FROM film");
    
    
    while($ROW = MYSQLI_FETCH_ARRAY($QUERY, MYSQLI_ASSOC)){
        $film[]= array(
            'id_film' => $ROW['id_film'],
            'judul_film' => $ROW['judul_film'],
            'pengarang_film' => $ROW['pengarang_film']
        );
    }
    
    header('Content-Type:application/json;charset=utf-8');
    ECHO  JSON_ENCODE($film, JSON_PRETTY_PRINT);
    MYSQLI_CLOSE($conn);
    
?>