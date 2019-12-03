<?php
    session_start();
    REQUIRE_ONCE('koneksi.php');
    
    if($_SESSION["usn"]!=null){
    	if(isset($_POST['var_judul']) AND isset($_POST['var_pengarang'])){
        	$judul = addslashes($_POST['var_jdl']);
        	$pengarang = addslashes($_POST['var_peng']);
        	$q = "INSERT INTO film (judul, pengarang) VALUES ('".$judul."', '".$pengarang."')";
            $QUERY = MYSQLI_QUERY($conn, $q);
            

            $temp = "img/";
            if (!file_exists($temp))
                mkdir($temp);
        
            $fileupload      = $_FILES['files']['tmp_name'];
            $ImageName       = $_FILES['files']['name'];
            $ImageType       = $_FILES['files']['type'];
        
            if (!empty($fileupload)){
                // mengacak angka untuk nama file
                $qid = "SELECT id_film FROM film ORDER BY id_film DESC LIMIT 0, 1";
                $QUERYid = MYSQLI_QUERY($conn, $qid);
                
                while($ROW = MYSQLI_FETCH_ARRAY($QUERYid, MYSQLI_ASSOC)){
                    $id= $ROW['id_pesanan'];
                }
                $nama = "foto"+($id+1);
        
                $ImageExt       = substr($ImageName, strrpos($ImageName, '.'));
                $ImageExt       = str_replace('.','',$ImageExt); // Extension
                $ImageName      = preg_replace("/\.[^.\s]{3,4}$/", "", $ImageName);
                $NewImageName   = $nama.'.'.$ImageExt;
        
                move_uploaded_file($_FILES["fileupload"]["tmp_name"], $temp.$NewImageName); // Menyimpan file
        
            }


        	echo 'ok';
        }
    }



?>