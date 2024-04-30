<?php 
    require_once "ficheros/compartidos/clases.php"; 
    $imagen = "";
    $limiteInferior = 1;
    $limiteSuperior = 5;

     if (isset($_POST['ver']) || isset($_POST['slider'])) {
            if  (isset($_POST['seleccion'])) { 
                $imagen = $_POST['seleccion'];
            };
            if  (isset($_POST['slider'])) { 
                $limiteSuperior = ($_POST["slider"]+1)*5;
                $limiteInferior = $limiteSuperior-4;
            };    
            // Aqui toca hacer la busqueda en el vector        
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aska Inmobiliaria</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="ficha.js" ></script>

</head>
<body>
    <?php include_once "ficheros/compartidos/encabezado.php"?>
    <div id="cuerpo">
        <div id="datos">     
            <h2>Listado de casas</h2>  
            <h4>Desliza para ver más casas</h4>
            <form method="POST" id="formulario" name="formulario" action="index.php"> 
                    <?php if(isset($_POST["slider"])) {?>
                        <input type="range" min="0" max="3" value="<?= $_POST['slider'] ?>" name="slider" onchange="document.getElementById('formulario').submit()">
                    <?php } else {?>
                        <input type="range" min="0" max="3" value="0" name="slider" onchange="document.getElementById('formulario').submit()">
                    <?php } ?>              
                <div class="contenedor">            
                    <div class="elemento" style="background-color: #C30613;">FOTO</div>            
                    <div class="elemento" style="background-color: #C30613;">DESCRIPCION</div>            
                    <div class="elemento" style="background-color: #C30613;">PRECIO(€)</div>    
                    <div class="elemento" style="background-color: #C30613;">FICHA</div>
                    <?php            
                    $listado = new ficheroJson('ficheros/casas.json','');
                    $contador = 1;
                    foreach ($listado->lista as $casa) {
                         if ($contador >= $limiteInferior && $contador <= $limiteSuperior) {
                            $objeto = (object)($casa);?>
                            <div class="elemento">
                                <?php if(isset($objeto->id)) {?>
                                    <img class="imagen" src="<?php echo 'ficheros/imagenes/casa'.$objeto->id.'.jpg'?>" >
                                <?php }; ?>
                            </div>            
                            <div class="elemento"><?= $objeto->descripcion ?></div>        
                            <div class="elemento"><?= $objeto->precio ?></div>
                            <div class="elemento">
                                <input class="boton" type="button" name="ver" value="Ver" onclick="muestraFicha(<?php echo $objeto->id ?>,'<?php echo $objeto->descripcion ?>','<?php echo $objeto->año ?>','<?php echo $objeto->garaje ?>','<?php echo $objeto->dormitorios ?>','<?php echo $objeto->baños ?>','<?php echo $objeto->superficie ?>','<?php echo $objeto->precio ?>')">  
                            </div>
                            <?php }
                            $contador++;
                            }; ?>
                </div>                   
                    
            </form> 
        </div>
        <?php  ?>                         
        
        <div id="ficha">                   

            <?php require_once "ficha.php"; ?>
        
        </div>
    </div>
    <?php include_once "ficheros/compartidos/pie.php"?>
</body>
</html>

