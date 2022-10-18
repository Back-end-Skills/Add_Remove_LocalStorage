<?php
    $host ="localhost";
    $user="root";
    $pass="";
    $dbname="vp-virtual";
    $port=3306;

    try{
        $conn = new PDO("mysql:host=$host;dbname=" .$dbname, $user, $pass);
        echo "success";
    } catch(PDOException $err) {
        die('eroor!'. $err->getMessage());
    }