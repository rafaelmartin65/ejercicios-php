<?php
require_once "db.php"; // Llamada a DB
class familias
{
    public $codigo;
    public $familia;

    public function __construct($codigo = 0,$familia = "")
    {
        $this->codigo= $codigo;
        $this->familia = $familia;
    }

    public function listar() {
        try
        {
            // Nueva conexión con base de datos (DataBase)
            $conn = new DB();
            $stm = $conn->conexion()->prepare("SELECT * FROM familias");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_OBJ);
        } catch (Exception $e){
            die($e->getMessage());
        }

    }
}
?>