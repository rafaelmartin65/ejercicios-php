
<?php
// Conexión con base de datos (DataBase)
class DB
{
    private  $servidor;
    private  $puerto;
    private  $base;
    private  $usuario;
    private  $contraseña;
    private  $charset;
    private  $opciones = array(PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION);
    // ERRORES ¿?

    // https://diego.com.es/tutorial-de-pdo (TUTORIAL)

    function __construct()
    {
        $this->servidor = "127.0.0.1";
        $this->puerto = "3306"; // Loi dice xampp
        $this->base = "zalando"; // Nombre base de datos
        $this->usuario = "root";
        $this->contraseña = "";
        $this->charset = "utf8";
    }

    // Va a intentar conectar y, si no, muestra un mensajito
    public function conexion() {
        try{
            $conecta = new PDO("mysql:host=$this->servidor:$this->puerto;dbname=$this->base;charset=$this->charset",$this->usuario,$this->contraseña,$this->opciones);
        }catch(PDOException $e){
            echo 'Error de conexión:'.$e->getMessage();
            exit;
        }
        return $conecta;
    }

    

}