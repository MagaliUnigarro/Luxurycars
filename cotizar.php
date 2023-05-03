<?php 

//ini_set('display_errors',1);
try{
  $control = true;
  if(empty($_POST)){
    $control = false;
  }
  if(!empty($_POST) && empty($_POST['color'])){
    echo "el color no puede estar vacio";
    $control = false;
  }
  if($control===true){
    $conexion = mysqli_connect("localhost", "root", "", "cotizar");
    
    $comando="INSERT INTO `formulario2`(`nombres`, `apellidos`, `correo`, `direccion`, `ciudad`, `intereses`, `referencia`, `transmision`, `color`, `uso`, `credito`, `pago`, `comentario`) VALUES ('{$_POST['nombres']}', '{$_POST['apellido']}', '{$_POST['correo']}', '{$_POST['direccion']}', '{$_POST['ciudad']}', '{$_POST['intereses']}', '{$_POST['referencia']}','{$_POST['transmision']}', '{$_POST['color']}', '{$_POST['uso']}', '{$_POST['credito']}', '{$_POST['pago']}', '{$_POST['comentario']}');";
    
    mysqli_query($conexion, $comando);
   echo "Datos grabados correctamente";
  }
}catch(Exception $e){
    echo "Lo sentimos su solicitud no pudo ser procesada, intente más tarde.";
}

require_once(__DIR__.'/secciones/cabeza.html');
require_once(__DIR__.'/secciones/cotizar.html');
require_once(__DIR__.'/secciones/pie.html');
