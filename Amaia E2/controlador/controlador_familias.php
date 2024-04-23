<?php
    require_once "../modelo/familias.php"; // Llamada a productos
    $datos = new familias();   //Crea un nuevov elemento de clase Articulos en productos.php
    $jsondata = $datos -> listar();
    echo json_encode($jsondata, JSON_FORCE_OBJECT)
?>