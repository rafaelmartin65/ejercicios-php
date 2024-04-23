<?php
require_once "db.php";

class Articulos
{
    public $codigo;
    public $descripcion;
    public $familia;
    public $impuesto;
    public $precio;
    public $stock;

    public function __construct($codigo = 0,$descripcion = "",$familia = 0,$impuesto = 0,$precio = 0,$stock = 0)
    {
        $this->codigo = $codigo;
        $this->descripcion = $descripcion;
        $this->familia = $familia;
        $this->impuesto = $impuesto;
        $this->precio = $precio;
        $this->stock = $stock;
    }

    public function listar($filtro,$pagina) {
        try
        {
            $conn = new DB();
            $clausula = "SELECT codigo,descripcion,nombfamilia as familia,stock,precio,impuesto FROM articulos inner join familias on articulos.familia = familias.codfamilia ";
            if ($filtro != "0") {
                $clausula = $clausula." where articulos.familia = ".$filtro;
            }
            $clausula = $clausula." limit ".(($pagina-1) * 10).",10";
            $stm = $conn->conexion()->prepare($clausula);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }
    }

    public function contador($filtro){
        try
        {
            $conn = new DB();
            $clausula = "SELECT ceiling(count(*)/10) as total FROM articulos ";
            if ($filtro != "0") {
                $clausula = $clausula." where articulos.familia = ".$filtro;
            }
            $stm = $conn->conexion()->prepare($clausula);
            $stm->execute();
            return $stm->fetch(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }
    }

}
?>