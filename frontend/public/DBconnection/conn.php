<?php 

    $host = 'localhost';
    $username = 'root';
    $password = 'qaplwsok01';
    $dbname = 'movierecord';

    $conn = mysqli_connect($host,$username,$password,$dbname);

    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    else{
        echo "";
    }
?>