<?php require_once "ficheros/compartidos/clases.php"; ?>

<link rel="stylesheet" href="ficha.css">
<script defer src="ficha.js" ></script>

<form id= "fichaCasa" name="fichaCasa" method="POST">
    <h3>Ficha de la casa</h3>
    <ul class="lista">
        <li class="fila">    
            <?php if(isset($objeto->id)) {?>
                <img class="foto" id = "imagen" src="<?php echo 'ficheros/imagenes/casa'.$objeto->id.'.jpg'?>" >
            <?php }; ?>
        </li>
        <li class="fila">  
            <label for="id">Identificador:<input type="text" name="id" id="id" value="<?php echo  $objeto->id ?>" disabled></label> 
        </li>
        <li class="fila">  
            <label for="descripcion">Descripcion:<input type="text" name="descripcion" id="descripcion" value="<?php echo  $objeto->descripcion; ?>"disabled></label>
        </li>
        <li class="fila"> 
            <label for="año">Año:<input type="text" name="año" id="año" value="<?php echo $objeto->año; ?>"disabled></label>
        </li>
        <li class="fila"> 
            <label for="garaje">Garaje:<input type="text" name="garaje" id="garaje"value="<?php echo $objeto->garaje; ?>"disabled></label>
        </li> 
        <li class="fila"> 
            <label for="dormitorios">Dormitorios:<input type="number" name="dormitorios"  id="dormitorios" value="<?php echo $objeto->dormitorios; ?>"disabled></label>
        </li>
        <li class="fila"> 
            <label for="baños">Baños:<input type="number" name="baños" id="baños"  value="<?php echo $objeto->baños; ?>"disabled> </label>
        </li>
        <li class="fila"> 
            <label for="superficie">Superficie:<input type="number" name="superficie"  id="superficie" value="<?php echo $objeto->superficie; ?>"disabled> </label>
        </li> 
        <li class="fila"> 
            <label for="precio">Precio:<input type="number" name="precio"  id="precio" value="<?php echo $objeto->precio; ?>"disabled> </label>
        </li>
      
    </ul>           
</form>
