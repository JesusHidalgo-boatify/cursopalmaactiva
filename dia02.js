/**
 * DIA 02 - APUNTES Y RESUMENES
 */

// OPERADORES ARITMETICOS
// +  -  *  /  %  ++  --

// OPERADORES DE ASIGNACIÓN
// =  +=  -=  *=  /=  %=

// OPERADORES LÓGICOS
// &&  ||  !

// OPERADOR TERNARIO
// (condicion? expr1 : expr2)

// TEMPLATE STRING
// ${}

// STRING (MÉTODOS)
// txt.length

// PANTALLA
// alert, console, prompt y console.log

// CONDICIONALES
// if () {}
// if
// if else
// if else if

// condicionales multiples
// switch - case - default

// BUCLES o LOOPS
// for (){}

/**
 * EJERCICIO DIA 2 -----------------------------------------------
 */

// CONTROL EN EL CINE OMNIMAX

// entrada de datos

var nombre = prompt("Por favor, introduzca su nombre:");
var edad = prompt("A continuación, introduzca su edad");
edad = Number(edad); // convertimos edad al tipo de dato number para no tener problemas más tardes en los 'ifs'
var vacuna = prompt("Indique si está vacunado: (SI/NO)");
vacuna = vacuna.toUpperCase(); // evitamos la posibilidad de que el cliente introduzca su respuesta en minúsculas
if ((vacuna == "SI")) {
    vacuna = true;
} else if ((vacuna == "NO")) {
    vacuna = false;
} else {
    vacuna = false;
    alert("eres mu tonto, así que supongo que no estás vacunado"); // este caso se produce si el cliente ha escrito una respuesta diferente a 'SI' o 'NO'
}

// determinar el status de la persona

var status;

if (edad < 12) {
    status = "menor";
} else if ((edad > 11 && edad < 65) && vacuna) {
    status = "vacunado";
} else if (edad > 64 && vacuna ) {
    status = "tercera edad";
} else if (edad > 11 && vacuna==false ) {
    status = "no vacunado";
} else {
    status = "error"; // este caso me ayudará a depurar en caso de error
}

// asignación de respuesta

var respuesta;

switch (status) {
    case "menor":
        respuesta =
            "Lo lamento, " + nombre + ", no tienes edad suficiente para comprar entradas.";
        break;33
    case "vacunado":
        respuesta =
            "Bienvenido a Ocimax, " + nombre + ".Puede pasar a taquilla y comprar su entrada.";
        break;
    case "tercera edad":
        respuesta =
            "Bienvenido a Ocimax, " + nombre + ". Tiene usted un 50% de descuento en palomitas.";
        break;
    case "no vacunado":
        respuesta =
            "Lo lamento, " + nombre + ". Es imprescindible estar vacunado para poder entrar.";
        break;
    default:
        respuesta = "error en el sistema de control";
}

// impresión de la respuesta

console.log(respuesta);
