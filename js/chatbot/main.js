function algoconelchat() {
  // Agregar clase open a la ventana cuando no tenga la clase open y quitela cuando la tenga
  document.getElementById("ventanaChat").classList.toggle("open");
}

function inicio() {
  event.preventDefault();
  console.log(event.target.nombre.value);
}

function funcion(respuesta, pregunta){
document.getElementById("seccion_mensajes").innerHTML += '<span class="mensaje-usuario">'+pregunta+'</span>';
document.getElementById("seccion_mensajes").innerHTML += '<span class="mensaje-robot">'+respuesta+'<button onclick="funcion_pregunta()">Tengo otra pregunta</button></span>';
}

function funcion_pregunta (){
let idmn = Date.now()
document.getElementById("seccion_mensajes").innerHTML += '<span class="mensaje-usuario">Tengo otra pregunta</span>';
document.getElementById("seccion_mensajes").innerHTML += '<span id="'+idmn+'" class="mensaje-robot">Ok, en que mas te puedo ayudar?</span>';
fetch('chatbot.php')
.then(response => response.json())
.then(data => {
  // hacer algo con los datos, como mostrarlos en la página web
  document.getElementById(idmn).innerHTML += '<button onclick="funcion(\''+data[0].respuesta+'\',\''+data[0].pregunta+'\')">'+data[0].pregunta+'</button>';
  document.getElementById(idmn).innerHTML += '<button onclick="funcion(\''+data[1].respuesta+'\',\''+data[1].pregunta+'\')">'+data[1].pregunta+'</button>';
  document.getElementById(idmn).innerHTML += '<button onclick="funcion(\''+data[2].respuesta+'\',\''+data[2].pregunta+'\')">'+data[2].pregunta+'</button>';
  document.getElementById(idmn).innerHTML += '<button onclick="funcion(\''+data[3].respuesta+'\',\''+data[3].pregunta+'\')">'+data[3].pregunta+'</button>';
  document.getElementById(idmn).innerHTML += '<button onclick="funcion(\''+data[4].respuesta+'\',\''+data[4].pregunta+'\')">'+data[4].pregunta+'</button>';

})
.catch(error => {
  // manejar cualquier error que ocurra
  console.log(error);
});
}

fetch('chatbot.php')
.then(response => response.json())
.then(data => {
  // hacer algo con los datos, como mostrarlos en la página web
  document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion(\''+data[0].respuesta+'\',\''+data[0].pregunta+'\')">'+data[0].pregunta+'</button>';
  document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion(\''+data[1].respuesta+'\',\''+data[1].pregunta+'\')">'+data[1].pregunta+'</button>';
  document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion(\''+data[2].respuesta+'\',\''+data[2].pregunta+'\')">'+data[2].pregunta+'</button>';
  document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion(\''+data[3].respuesta+'\',\''+data[3].pregunta+'\')">'+data[3].pregunta+'</button>';
  document.getElementById("mensaje_inicial").innerHTML += '<button onclick="funcion(\''+data[4].respuesta+'\',\''+data[4].pregunta+'\')">'+data[4].pregunta+'</button>';

})
.catch(error => {
  // manejar cualquier error que ocurra
  console.log(error);
});