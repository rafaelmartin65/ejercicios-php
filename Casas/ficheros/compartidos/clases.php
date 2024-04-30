<?php
class ficheroJson {
    public $lista;
    //Carga en la variable lista todo el contenido del fichero Json
    public function __construct( $descripcion)
    {
        $this->lista = json_decode(file_get_contents($descripcion),true);
    }
    // __construct:PHP permite a los desarrolladores declarar métodos constructores para las clases. Aquellas que tengan un método constructor lo invocarán en cada nuevo objeto creado, lo que lo hace idóneo para cualquier inicialización que el objeto pueda necesitar antes de ser usado.
    // json_decode:Convierte un string codificado en JSON a una variable de PHP.
    // file_get_contents:Transmite un fichero completo a una cadena

       
}
class Casa {
    public $id;
    public $descripcion;
    public $año;
    public $garaje;
    public $dormitorios;
    public $baños;
    public $superficie;
    public $precio;

    //Constructor
    public function __construct($id=null,$descripcion=null,$año=null,$garaje=null,$dormitorios=null,$baños=null,$superficie=null,$precio=null)
    {
        $this->id = $id;
        $this->descripcion = $descripcion;
        $this->año = $año;
        $this->garaje = $garaje;
        $this->dormitorios = $dormitorios;
        $this->baños = $baños;
        $this->superficie = $superficie;
        $this->precio = $precio;
    }
}
?>