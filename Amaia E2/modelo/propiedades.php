<?php
require_once "db.php";

class Propiedades
{
    public $id;
    public $tipo;
    public $idlocalidad;
    public $metros;
    public $dormitorio;
    public $baño;
    public $precio;
    
    public function __construct($id = 0,$tipo = "",$idlocalidad = 0,$metros = 0,$dormitorio = 0,$baño = 0,$precio = 0)
    {
        $this->id = $id;
        $this->tipo = $tipo;
        $this->idlocalidad = $idlocalidad;
        $this->metros = $metros;
        $this->dormitorio = $dormitorio;
        $this->baño = $baño;
        $this->precio = $precio;
    }

    public function listar($filtro) {
        try
        {
            $conn = new DB();
            $clausula = "select propiedades.id,tipo,descripcion,metros,dormitorio,baño,precio from propiedades inner join localidades on propiedades.idlocalidad = localidades.id";
            if ($filtro != "0") {
                $clausula =  $clausula." where propiedades.idlocalidad = ".$filtro;
            }
            $stm = $conn->conexion()->prepare($clausula);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }
    }

}
?>