<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    if($_SESSION["usn"]!=null){
        $ids = addslashes($_POST['var_ids']);
        $q = "DELETE FROM pesanan WHERE id_pesanan = '".$_SESSION['id']."'";
        $QUERY = MYSQLI_QUERY($conn, $q);
        echo 'ok';
    }



?>