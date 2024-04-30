<?php
include "db_connection.php";

var_dump($_GET);

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ((isset($_GET["id"]) && (isset($_GET["nombre"])))) {
        $clausula = "SELECT * from alumnos where id = " . $_GET["id"]. " or nombre like %" .$_GET["nombre"]."%" ;
        echo $clausula;
        $stm = $conecta->prepare($clausula);
        $stm->execute();
        echo json_encode($stm->fetchAll(PDO::FETCH_OBJ));
    } else {
        $clausula = "SELECT * from alumnos";
        $stm = $conecta->prepare($clausula);
        $stm->execute();
        // echo json_encode($stm->fetchAll(PDO::FETCH_OBJ));
    }
}
?>