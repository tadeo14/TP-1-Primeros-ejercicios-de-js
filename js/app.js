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


mayor ()

EJERCICIO 7

Escribe un programa que pida 3 numeros y escriba en la pantalla el mayor de los tres.



const num1 = parseInt(prompt('ingrese un numero 1'));
const num2 = parseInt(prompt('ingrese un numero 2'));
const num3 = parseInt(prompt('ingrese un numero 3'));


function mayor (num1,num2,num3){
    if (num1 > num2 && num1 > num3) {
        console.log (`El ${num1} es el mas grande`);
    } else if (num2 > num1 && num2 > num3){
        console.log (`El ${num2} es el mas grande`)
    } else if (num3 > num1 && num3 > num2){
        console.log (`El ${num3} es el mas grande`)
    } else if (num1 === num2 && num1 !== num3) {
        console.log(`El ${num1} y el ${num2} son los mayores`);
    } else if (num1 === num3 && num1 !== num2) {
        console.log(`El ${num1} y el ${num3} son los mayores`);
    } else if (num2 === num3 && num2 !== num1) {
        console.log(`El ${num2} y el ${num3} son los mayores`);
     } else {
        console.log (`Son todos iguales`)
    }
    
}


mayor (num1, num2, num3)

EJERCICIO 8 

Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo:
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.




function par () {
    const n = prompt("ingrese un numero: ");
    if (n % 2 == 0) {
        console.log(`${n} es par`);
    } else {
        console.log(`${n} es impar`);
    }
}

par()

EJERCICIO 9 

- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

Ejemplo:
input: Hola mundo           Output: oauo


let phrase = prompt('Escribe una frase');
phrase = phrase.toLowerCase(); //para pasar a minuscula
console.log(phrase);
for (let i = 0; i < phrase.length; i++) {
	if (
		phrase.substr(i, 1) == 'a' ||
		phrase.substr(i, 1) == 'e' ||
		phrase.substr(i, 1) == 'i' ||
		phrase.substr(i, 1) == 'o' ||
		phrase.substr(i, 1) == 'u'
	) {
		document.write(phrase.substr(i, 1));
	}     //con el substr extraemos las vocales, luego con el bucle for  vamos comparando cada letra de la fr
}

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo:
input: 20 Output: El 20 es divisible por 2.

*/

function divisible() {
    const n = prompt("Ingrese un número: ");
    if (n % 2 === 0 || (n % 3 === 0) || (n % 5 === 0) || (n % 7 === 0)) {
        if (n % 2 === 0) {
            console.log(`El ${n} es divisible por 2.`);
        }
        if (n % 3 === 0) {
            console.log(`El ${n} es divisible por 3.`);
        }
        if (n % 5 === 0) {
            console.log(`El ${n} es divisible por 5.`);
        }
        if (n % 7 === 0) {
            console.log(`El ${n} es divisible por 7.`);
        }
    } else {
        console.log(`El ${n} no es divisible por ninguno de los números anteriores.`);
    }
}
divisible();


