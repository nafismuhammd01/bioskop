<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    if($_SESSION["usn"]!=null){
    	if(isset($_POST['var_kursi'])){
        	$kursi = addslashes($_POST['var_kursi']);
        	$q = "UPDATE pesanan SET seat = '".$kursi."' WHERE id_pesanan = '".$_SESSION['id']."'";
        	$QUERY = MYSQLI_QUERY($conn, $q);
        	echo 'ok';
        }else {
            echo 'error';
        }
    }



?>