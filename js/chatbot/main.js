function algoconelchat() {
    // Agregar clase open a la ventana cuando no tenga la clase open y quitela cuando la tenga
    document.getElementById("ventanaChat").classList.toggle("open");
}

function inicio() {
    event.preventDefault();
    console.log(event.target.nombre.value);
}