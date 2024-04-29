<?php
    require_once "../modelo/apiLista.php";
    require_once "../modelo/pokemon.php";
    $pagina =  $_POST["pagina"];
    $listado = new apiLista($pagina);
    $jsondata = [];
    $jsondata["anterior"] = $listado->datos->previous;
    $jsondata["siguiente"] = $listado->datos->next;
    $jsondata["lista"] = [];
    for ($i=0;$i < count($listado->datos->results);$i++) {
        $pokemon = new POKEMON();
        $pokemon->cargaPokemon($listado->datos->results[$i]->name); 
        array_push($jsondata["lista"],$pokemon);
        unset($pokemon);
    }      
    echo json_encode($jsondata,JSON_PRETTY_PRINT);
    // Creacion de un JSON apartir de una o mas variables
    // echo json_encode(array("pagina" =>$pagina));
?>

