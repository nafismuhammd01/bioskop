<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    if($_SESSION["usn"]!=null){
    	if(isset($_POST['var_waktu'])){
        	$time = addslashes($_POST['var_waktu']);
        	$q = "UPDATE pesanan SET time = '".$time."' WHERE id_pesanan = '".$_SESSION['id']."'";
        	$QUERY = MYSQLI_QUERY($conn, $q);
        	echo 'ok';
        }
    }



?>