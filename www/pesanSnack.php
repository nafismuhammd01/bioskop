<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    if($_SESSION["usn"]!=null){
    	if(isset($_POST['var_ids'])){
        	$ids = addslashes($_POST['var_ids']);
        	$q = "UPDATE pesanan SET id_snack = '".$ids."' WHERE id_pesanan = '".$_SESSION['id']."'";
        	$QUERY = MYSQLI_QUERY($conn, $q);
        	$_SESSION['price']+=$_POST['var_hrgs'];
        	echo 'ok';
        }
    }



?>