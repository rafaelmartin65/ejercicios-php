<?php
    // var_dump($_POST["familias"]);
    require_once "../modelo/articulos.php"; // Llamada a productos
    $datos = new Articulos();   //Crea un nuevov elemento de clase Articulos en productos.php
    $jsondata = $datos -> listar($_POST["familias"]);
    echo json_encode($jsondata, JSON_FORCE_OBJECT)
?>