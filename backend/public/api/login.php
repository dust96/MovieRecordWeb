<?php
    require_once '../DBconnection/conn.php';

    $sql = "select * from tb_user";
   
    $result = mysqli_query($conn,$sql);

    $data = array();

    while($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }

    echo json_encode($data);   
    
?>