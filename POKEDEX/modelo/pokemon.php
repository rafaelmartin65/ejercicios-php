<?php
require_once "apiPokemon.php";
require_once "apiDescripcion.php";

class POKEMON 
    {
        public $codigo;
        public $nombre;
        public $descripcion;
        public $tipo;
        public $habilidades;
        public $movimientos;
        public $altura;
        public $peso;
        public $id;
        public $imagen;
       
        public function __construct($codigo="",$nombre="",$descripcion =array(),$tipo=array(),$habilidades = array(),$movimientos = array(),$altura="",$peso="",$id="",$imagen="")
        {
        $this->codigo = $codigo;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->tipo = $tipo;
        $this->habilidades = $habilidades;
        $this->movimientos = $movimientos;
        $this->altura = $altura;
        $this->peso = $peso;
        $this->id = $id;
        $this->imagen = $imagen;
    }
    
    public function cargaPokemon($codigo){
        $datos = new apiPokemon($codigo);
        $this->codigo = $codigo;
        $this->nombre = $datos->datos->name;
        $this->imagen = $datos->datos->sprites->other->{'official-artwork'}->front_default;
        $descripciones = new apiDescripcion($datos->datos->species->url);
        $this->descripcion = $descripciones->descripcion;
        $tipos = [];
        for ($i=0;$i < count($datos->datos->types);$i++){
            array_push($tipos,array('tipo' => $datos->datos->types[$i]->type->name));
        }
        $this->tipo = $tipos;
        $habilidad = [];
        foreach($datos->datos->abilities as $hab){
            array_push($habilidad,$hab->ability->name);
        }
        $movimiento = [];
        foreach($datos->datos->moves as $mov){
            array_push($movimiento,$mov->move->name);
        }
        $this->altura = $datos->datos->height;
        $this->peso = $datos->datos->weight;
        $this->id = $datos->datos->id;
        $this->habilidades = $habilidad;
        $this->movimientos = $movimiento;
    }

}