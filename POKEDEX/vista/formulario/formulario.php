<link rel="stylesheet" href="../formulario/formulario.css">

<?php
    require_once "../modelo/pokemon.php";
    $codigo = $_POST["codigo"];
    $pokemon = new POKEMON();
    $pokemon->cargaPokemon($codigo);
    // print_r($pokemon);
?>

<div id="pokedex">
<!-- Left Panel -->
<div id="left-panel">
  <!-- Top lights -->
  <div class="left-top-container">
    <svg height="100" width="225" class="left-svg">
      <polyline
        points="0,75 70,75 90,38 224,38"
        style="fill: none; stroke: black; stroke-width: 3"
      />
    </svg>
    <div class="lights-container">
      <div class="big-light-boarder">
        <div class="big-light blue">
          <div class="big-dot light-blue"></div>
        </div>
      </div>
      <div class="small-lights-container">
        <div class="small-light red">
          <div class="dot light-red"></div>
        </div>
        <div class="small-light yellow">
          <div class="dot light-yellow"></div>
        </div>
        <div class="small-light green">
          <div class="dot light-green"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Center Screen -->
  <div class="screen-container">
    <div class="screen">
      <div class="top-screen-lights">
        <div class="mini-light red"></div>
        <div class="mini-light red"></div>
      </div>
      <div id="main-screen"><img class="imagen" id="foto" src="<?= $pokemon->imagen ?>" alt="Foto del Pokemon"></div>
      <div class="bottom-screen-lights">
        <div class="small-light red">
          <div class="dot light-red"></div>
        </div>
        <div class="burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Bottom Buttons -->
  <div class="buttons-container">
    <div class="upper-buttons-container">
      <div class="big-button"></div>
      <div class="long-buttons-container">
        <div class="long-button red"></div>
        <div class="long-button light-blue"></div>
      </div>
    </div>
    <div class="nav-buttons-container">
      <div class="green-screen">
        <span id="name-screen"><?= $pokemon->nombre ?></span>
      </div>
      <div class="right-nav-container">
        <div class="nav-button">
          <div class="nav-center-circle"></div>
          <div class="nav-button-vertical"></div>
          <div class="nav-button-horizontal">
            <div class="border-top"></div>
            <div class="border-bottom"></div>
          </div>
        </div>
        <div class="bottom-right-nav-container">
          <div class="small-light red">
            <div class="dot light-red"></div>
          </div>
          <div class="dots-container">
            <div class="black-dot">.</div>
            <div class="black-dot">.</div>
            <div class="black-dot">.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End of Left panel -->

<!-- Right-panel -->
<div id="right-panel">  
  <!-- Top screen -->
  <div class="top-screen-container">
    <div id="about-screen" class="right-panel-screen">
        <div class="wrapper">
          <?php 
              $altura = $pokemon->altura * 10;
              $peso = $pokemon->peso / 10;
              $num = count($pokemon->descripcion) - 1 ;

              echo "<div class='elemento'>Descripcion: ".$pokemon->descripcion[$num]["descripcion"]."</div><br><hr>";
              echo "<br><div class='elemento'>Altura: ".$altura."cm</div><br><hr>";
              echo "<br><div class='elemento'>Peso: ".$peso."kg</div><br><hr>";
              ?>

              <br>
              <div class="elemento">
                Habilidades: 
              <?php
                for($i=0; $i < count($pokemon->habilidades); $i++){
                  echo "<span> ".$pokemon->habilidades[$i]." </span>";
                }
              ?>
              </div>

              <br><hr><br>

              <div class="elemento">
                Movimientos:
                  <?php
                    for($i=0; $i < count($pokemon->movimientos); $i++){
                      echo "<p>".$pokemon->movimientos[$i]."</p>";
                    }
                  ?>
              </div>
        </div>
    </div>
  </div>
  <!-- Blue Buttons -->
  <div class="square-buttons-container">
    <div class="blue-squares-container">
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
      <div class="blue-square"></div>
    </div>
  </div>
  <!-- Center Buttons -->
  <div class="center-buttons-container">
    <div class="center-left-container">
      <div class="small-reds-container">
        <div class="small-light red">
          <div class="dot light-red"></div>
        </div>
        <div class="small-light red">
          <div class="dot light-red"></div>
        </div>
      </div>
      <div class="white-squares-container">
        <div class="white-square"></div>
        <div class="white-square"></div>
      </div>
    </div>
    <div class="center-right-container">
      <div class="thin-buttons-container">
        <div class="thin-button"></div>
        <div class="thin-button"></div>
      </div>
      <div class="yellow-button yellow">
        <div class="big-dot light-yellow"></div>
      </div>
    </div>
  </div>
  <!-- Bottom screens -->
  <div class="bottom-screens-container">
    <div id="type-screen" class="right-panel-screen">
        <?php
            for ($i=0;$i < count($pokemon->tipo);$i++){
                echo '<p class="tipo">'.$pokemon->tipo[$i]["tipo"].'</p>';
                echo '<br>';
            }
        ?>
    </div>
    <div id="id-screen" class="right-panel-screen">
        <?php
            echo '<p class="numero">#'.$pokemon->id.'</p>';
        ?>
    </div>
  </div>
</div>
</div>



