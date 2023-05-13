<?php
$conexion = mysqli_connect("localhost", "root", "", "contactanos");
$comando= "SELECT * FROM preguntas WHERE padre = 0";
$resultadoejecucion=mysqli_query($conexion, $comando);
if ($resultadoejecucion === false) {
    die(mysqli_error($conexion));
} else {
    $datos = mysqli_fetch_all($resultadoejecucion, MYSQLI_ASSOC);
    echo json_encode($datos);
}
