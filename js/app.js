//1 ejercicio
/*
alert("un mensaje");
//2 ejercicio
document.write("Hello  World!");


//3 ejercicio
document.write(3 + 5);

/4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder

const coder = prompt("Dime tu nombre de usuario:");

document.write(`hola ${coder}`);

ejercicio 5
Escribe un programa de tres líneas que pida un número, pida otro número y 
escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt

const num1 = parseInt(prompt('ingrese un numero 1'));
const num2 = parseInt(prompt('ingrese un numero 2'));
const resultado = num1 + num2;
document.write(`El resultado es ${resultado}`);

ejercicio 5.1

escriba un programa que pida dos numeros y escriba en la pantalla cual es el mayor
*/

const num1 = parseInt(prompt('ingrese un numero 1'));
const num2 = parseInt(prompt('ingrese un numero 2'));

function mayor (){
    if (num1 > num2) {
        console.log (`El ${num1} es el mas grande`);
    } else if (num2>num1){
        console.log (`El ${num2} es el mas grande`)
    } else {
        console.log (`son iguales`)
    }
}
document.log(`El resultado es ${resultado}`);







