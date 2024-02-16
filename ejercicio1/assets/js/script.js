let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();

    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;

    let resultado = validar(nombre, asunto, mensaje);

    if (resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
};

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;

    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
        pasamosLaValidacion = false;
    };

    let validacionAsunto = /[a-zA-Z]/gim;

    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido."
        pasamosLaValidacion = false;
    };

    let validacionMensaje = /[a-zA-Z]/gim;

    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido"
        pasamosLaValidacion = false;
    };

    return pasamosLaValidacion

};