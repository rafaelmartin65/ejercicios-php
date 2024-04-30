<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $clave= '425cca1e8df28e4963dcc36cb497a33e';
    $muni = "SANTA CRUZ DE TENERIFE";
    if (isset($_POST["municipio"]))
        $muni=$_POST["municipio"];
    $url = 'https://api.openweathermap.org/data/2.5/weather?q='.$muni.',ES&units=metric&APPID='.$clave.'&lang=es';

    $ch = curl_init($url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    $control = true;
    if( ($json = curl_exec($ch) ) === false)
    {
        echo 'Error Curl : ' . curl_error($ch);
        $control = false;
    }
    else
    {
        $datos = json_decode($json,true);
        if ((is_null($datos)) || ($datos['cod'] == 404)) {
            $control = false;
        }    
    }
    curl_close($ch);
    
    if ($control) {?>
        <p>Ciudad: <?php echo $datos['name']."-".$datos['sys']['country'];?></p>
        <p>Longuitud :<?php echo $datos['coord']['lon'];?></p>
        <p>Latitud :<?php echo $datos['coord']['lat'];?></p>
        <p>Pronostico:<?php echo $datos['weather'][0]['description'];?></p>
        <?php
        $icono = $datos['weather'][0]['icon'];
        $iconurl = "http://openweathermap.org/img/w/".$icono.".png";?>
        <img src=<?php echo $iconurl;?> alt="">
        <p>Temp Minima :<?php echo $datos['main']['temp_min'];?></p>
        <p>Temp Máxima :<?php echo $datos['main']['temp_max'];?></p>
        <p>Humedad :<?php echo $datos['main']['humidity'];?>%</p>
        <p>V.viento :<?php echo $datos['wind']['speed'];?>Km/h</p>
    <?php } else { ?>
        <p>Ciudad : <?php echo $muni;?></p>
        <p>Se carece de datos de esta ciudad</p>
    <?php } ?>
</body>
</html>