<?php
    $datos = json_decode(file_get_contents("php://input"), true);
    var_dump($datos['image']);
    var_dump($_POST);
    if (isset($datos['image'])) {
        $file_name = $datos['image']['name'];
        $file_size = $datos['image']['size'];
        $file_tmp = $datos['image']['tmp_name'];
        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

        // Validación por tipo de fichero
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "jpeg" && $file_type != "gif") {
            echo "Tipo de fichero invalido. Solo se aceptan JPG, JPEG, PNG y  GIF";
            exit;
        }

        // Validación por tamaño de fichero
        if ($file_size > 1000000) {
            echo "Fichero demasiado grande, el hosting no acepta ficheros de mas de 1 Mb";
            exit;
        }

        // Movemos el fichero a una carpeta determinada
        $destination_folder = "uploads/";
        if (!file_exists($destination_folder)) {
            mkdir($destination_folder, 0777, true);
        }
        $destination_file = $destination_folder . $file_name;
        if (move_uploaded_file($file_tmp, $destination_file)) {
            echo "Fichero cargado satisfactoriamente";
        } else {
            echo "Error en la carga del fichero";
        }
    } else {
        echo "No se ha seleccionado imagen";
    }
?>