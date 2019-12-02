<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    if($_SESSION["usn"]!=null){
    	if(isset($_POST['var_jdl']) AND isset($_POST['var_peng'])){
        	$judul = addslashes($_POST['var_jdl']);
        	$pengarang = addslashes($_POST['var_peng']);
        	$tanggal = addslashes($_POST['var_tgl']);
        	$q = "INSERT INTO pesanan (judul_pesanan, pengarang_pesanan, tanggal, user_pemesan) VALUES ('".$judul."', '".$pengarang."', '".$tanggal."', '".$_SESSION['usn']."')";
        	$QUERY = MYSQLI_QUERY($conn, $q);
        	$qid = "SELECT id_pesanan FROM pesanan ORDER BY id_pesanan DESC LIMIT 0, 1";
        	$QUERYid = MYSQLI_QUERY($conn, $qid);
        	
        	while($ROW = MYSQLI_FETCH_ARRAY($QUERYid, MYSQLI_ASSOC)){
                $id= $ROW['id_pesanan'];
            }
        	
        	$_SESSION['price']=25000;
        	$_SESSION['id']=$id;
        	echo 'ok';
        }
    }



?>