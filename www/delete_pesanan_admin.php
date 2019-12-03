<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    $id = addslashes($_POST['var_idpes']);
    $q = "DELETE FROM pesanan WHERE id_pesanan = '".$id."'";
    $QUERY = MYSQLI_QUERY($conn, $q);
    echo 'ok';
    



?>