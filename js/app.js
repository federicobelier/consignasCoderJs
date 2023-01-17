function numeroMayor(){
    let numero = prompt("Escoge un numero entre 950 y 1050");
    if (numero>1000) {
        alert("El numero que escogiste es mayor a 1000");
    } else {
        alert("El numero que escogiste es menor de 1000");
    }
}
function saludo () {
    let texto = prompt("Hola");
    let textoResultado = texto.toLocaleLowerCase();
    if (textoResultado=="hola") {
        alert("Hola y Chao");
    } else {
        alert("Saluda primero");
    }
}
function rango (){
    let numeroDos = prompt("Escoge un numero entre el 10 y el 90");
    if (numeroDos>10 && numeroDos<90) {
        alert("Estas en el rango")
    } else {
        alert("Estas afuera del rango")
    }
}

saludo();
numeroMayor();
rango();