<?php

include 'DBConfig.php';

$con = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);

$json = file_get_contents('php://input');

$obj = json_decode($json, true);

$username = $obj['username'];

$Sql_Query = "INSERT INTO users(username) VALUES ('$username')";

if(mysqli_query($con, $Sql_Query)) {
    $MSG = 'Data inserted successfully into bdd.';

    header('Content-Type: application/json');

    echo json_encode($MSG);;

} else {
    echo 'ERROR';
}

mysqli_close($con);