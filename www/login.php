<?php
    
    REQUIRE_ONCE('koneksi.php');
    session_start();
    
    if(isset($_POST['var_usn']) AND isset($_POST['var_pwd'])){
    	$username = addslashes($_POST['var_usn']);
    	$password = addslashes($_POST['var_pwd']);
    	$QUERY = MYSQLI_QUERY($conn, "SELECT * FROM akun where username = '".$username."' AND password = '".$password."'");
    	if(mysqli_num_rows($QUERY)==0){
    		echo 'Username atau Password Salah !';
    	}
    	else{
    		if(mysqli_num_rows(MYSQLI_QUERY($conn, "SELECT * FROM akun where username = '".$username."' AND tipe = 'admin'"))!=0){
    		    $_SESSION["usn"] = $username;
        		echo 'admin';
    		}
    		else {
        		$_SESSION["usn"] = $username;
        		echo 'ok';
    		}
    	}
    }





?>