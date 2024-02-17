var resultado = 0;

var btnSumar= document.getElementById("btn-sumar");
var btnRestar= document.getElementById("btn-restar");

var num1 = document.querySelector('#valor1');
var num2 = document.querySelector('#valor2');

//Valida que se ingresen sólo números 
let sumar = document.getElementById("btn-sumar");
sumar.addEventListener('click', validar);

let restar = document.getElementById("btn-restar");
restar.addEventListener('click', validar);

function validar() {
    let primerValor = document.querySelector("#valor1").value;
    let SegundoValor = document.querySelector("#valor2").value;
    let permitido = /[0-9]/gim;
    if (primerValor.match(permitido) && SegundoValor.match(permitido)) {
        Continue;
    } else {
        alert("Debe ingresar sólo números");
    };
};
//Fin de Valida que se ingresen sólo números

btnSumar.addEventListener('click',function(){
    Sumar(num1.value, num2.value);
    document.querySelector(".resultado").innerHTML = resultado;
});

btnRestar.addEventListener('click',function(){
    Restar(num1.value, num2.value);
    document.querySelector(".resultado").innerHTML = resultado;
});

let Sumar = (valor1,valor2) => {
    resultado = parseInt(valor1) + parseInt(valor2);
    return resultado;
 }

let Restar = (valor1,valor2) => {
    resultado = parseInt(valor1) - parseInt(valor2);
    if (resultado < 0){
        resultado = 0;
    }
    return resultado;
}