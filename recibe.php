<?php 
ini_set('display_errors',1);
try{
    $conexion2 = mysqli_connect("localhost", "root", "", "contactanos");
    
    $comando="INSERT INTO `formularios` (`nombre`, `apellido`, `email`, `ciudad de residencia`, `intereses de marca`, `comentario`) VALUES ('{$_POST['nombres']}', '{$_POST['apellido']}', '{$_POST['correoElectronico']}', '{$_POST['direccion_de_residencia']}', '{$_POST['interes_de_marca']}', '{$_POST['mensaje']}');";
    
    mysqli_query($conexion2, $comando);
    header('Location: inicio.html');
}catch(Exception $e){
    echo "Lo sentimos su solicitud no pudo ser procesada, intente más tarde.";
    header('Location: contactanos.html');
}

