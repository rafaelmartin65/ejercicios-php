<?php
require_once "db.php"; // Llamada a DB
class Articulos
{
    public $codigo;
    public $descripcion;
    public $familia;
    public $precio;

    public function __construct($codigo = 0,$descripcion = "",$familia = 0, $precio = 0)
    {
        $this->codigo = $codigo;
        $this->descripcion =$descripcion;
        $this->familia = $familia;
        $this->precio = $precio;
    }

    public function listar($filtro) {
        // Listar necesita un parámetro para poder filtrar
        try
        {
            // Nueva conexión con base de datos (DataBase)
            $conn = new DB();
            $clausula = "SELECT articulos.codigo,descripcion,familias.familia as familia, precio FROM articulos INNER JOIN familias on articulos.familia = familias.codigo";
            if ($filtro != "0") {
                $clausula = $clausula." where articulos.familia =".$filtro;
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