<?php
include "db_connection.php";

switch ($_SERVER['REQUEST_METHOD']) {
        // Entramos por peticion de registros con GET
    case "GET":
        if (isset($_GET["id"])) {
            $clausula = "SELECT * from alumnos where id = " . $_GET["id"];
            $stm = $conecta->prepare($clausula);
            $stm->execute();
            echo json_encode($stm->fetch(PDO::FETCH_OBJ));
        } else {
            $clausula = "SELECT * from alumnos";
            $stm = $conecta->prepare($clausula);
            $stm->execute();
            echo json_encode($stm->fetchAll(PDO::FETCH_OBJ));
        }
        break;

        // Entramos por añadir nuevo registro
    case "POST":
        // Ejmplo de clausula insert
        // insert into alumnos (id,nombre,apellidos,email,telefono,web,imagen) values (50,"Laura","Perez","","922205030","","")
        if ((isset($_POST["id"])) 
           && (isset($_POST["nombre"])) 
           && (isset($_POST["apellidos"])) 
           && (isset($_POST["email"])) 
           && (isset($_POST["telefono"])) 
           && (isset($_POST["web"])) 
           && (isset($_POST["imagen"]))) {
            $clausula = "insert into alumnos (id,nombre,apellidos,email,telefono,web,imagen) values (:id,:nombre,:apellidos,:email,:telefono,:web,:imagen)";
            $stm = $conecta->prepare($clausula);
            $stm->bindParam(':id' , $_POST["id"]); 
            $stm->bindParam(':nombre' , $_POST["nombre"]); 
            $stm->bindParam(':apellidos' , $_POST["apellidos"]); 
            $stm->bindParam(':email' , $_POST["email"]); 
            $stm->bindParam(':telefono' , $_POST["telefono"]); 
            $stm->bindParam(':web' , $_POST["web"]); 
            $stm->bindParam(':imagen' , $_POST["imagen"]); 
            echo $stm->execute();
        };
        break;
}
