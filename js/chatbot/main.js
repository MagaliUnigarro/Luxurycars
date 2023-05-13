function algoconelchat() {
    // Agregar clase open a la ventana cuando no tenga la clase open y quitela cuando la tenga
    document.getElementById("ventanaChat").classList.toggle("open");
}

function inicio() {
    event.preventDefault();
    console.log(event.target.nombre.value);
}

function funcion(respuesta1){
    document.getElementById("seccion_mensajes").innerHTML += '<span >'+respuesta1+'</span>';
}

fetch('chatbot.php')
  .then(response => response.json())
  .then(data => {
    // hacer algo con los datos, como mostrarlos en la página web
    console.log(data)
    console.log(data[2])
    console.log(data[2].pregunta)
    let respuesta1 = data[0].respuesta
    document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion(\''+respuesta1+'\')">'+data[0].pregunta+'</button>';
    document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion()">'+(data[1].pregunta)+'</button>';
    document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion()">'+(data[2].pregunta)+'</button>';
    document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion()">'+(data[3].pregunta)+'</button>';
    document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion()">'+(data[4].pregunta)+'</button>';

  })
  .catch(error => {
    // manejar cualquier error que ocurra
    console.log(error);
  });