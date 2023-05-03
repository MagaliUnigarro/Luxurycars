<?php 

//ini_set('display_errors',1);
try{
  $control = true;
  if(empty($_POST)){
    $control = false;
  }
  if(!empty($_POST) && empty($_POST['nombres'])){
    echo "el nombre no puede estar vacío";
    $control = false;
  }
  if($control===true){
    $conexion2 = mysqli_connect("localhost", "root", "", "contactanos");
    
    $comando="INSERT INTO `formulario` (`nombre`, `apellido`, `email`, `ciudad de residencia`, `intereses de marca`, `comentario`) VALUES ('{$_POST['nombres']}', '{$_POST['apellido']}', '{$_POST['correoElectronico']}', '{$_POST['direccion_de_residencia']}', '{$_POST['interes_de_marca']}', '{$_POST['mensaje']}');";
    
    mysqli_query($conexion2, $comando);
    echo "Datos grabados correctamente";
  }
}catch(Exception $e){
    echo "Lo sentimos su solicitud no pudo ser procesada, intente más tarde.";
}

require_once(__DIR__.'/secciones/cabeza.html');
require_once(__DIR__.'/secciones/contactanos.html');
require_once(__DIR__.'/secciones/pie.html');
