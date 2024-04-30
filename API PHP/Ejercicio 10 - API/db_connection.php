<?php
   $servidor = "localhost";
   $usuario = "root";
   $password = "";
   $bbdd = "academia";

   try{
        $conecta = new PDO("mysql:host=$servidor;dbname=$bbdd",$usuario,$password);
    }catch(PDOException $e){
        echo 'Error de conexión:'.$e->getMessage();
        exit;
    }
?>