<?php
    REQUIRE_ONCE('koneksi.php');
    
    if(isset($_POST['var_user']) AND isset($_POST['var_pass'])){
       	$user = addslashes($_POST['var_user']);
        $pass = addslashes($_POST['var_pass']);
        $QUERY1 = MYSQLI_QUERY($conn, "SELECT * FROM akun where username = '".$user."'");
        if (mysqli_num_rows($QUERY1)==0){
            $q = "INSERT INTO akun (username, password, tipe) VALUES ('".$user."', '".$pass."', 'user')";
            $QUERY = MYSQLI_QUERY($conn, $q);
            echo 'ok';
        }else {
            echo 'User telah digunakan';
        }
       	
    }
?>