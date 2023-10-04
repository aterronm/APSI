/*
        Alvaro Terron Masoko
        Arquitectura y Programacion de Sistemas en Internet | Practica 1  28/09/23

        Construir una funcion que tenga como parametro de entrada un string y devuelva un numero. Esta funcion
        se encargara de conocer la seguridad de una contraseña, segun los siguientes criterios:

            1 - Se debe convertir el string en array, cada caracter sera un elemento de array
            2 - Si tiene una letra y un numero, se sumara 1
            3 - Si tiene tres numeros seguidos, restara 1
            4 - Si la contraseña supera los 20 caracteres, restara 1
            5 - Si la contraseña es menor a 10 caracteres restara 1
            6 - Si tiene caracteres especiales, sumara 1

*/


export const nivelDeSeguridad = (password : string) : number => {

    const arr : string[] = password.split('')
    //console.log(arr)

    const longitud = password.length;
    //console.log(`La contraseña tiene una longitud de ${longitud} caracteres`)
   
    //expresion regular que representa un patron que entiende todos los caracteres especiales existentes
    const caracteresEspeciales : RegExp = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;


    let nivel : number = 0;

    //Conjunto de valores booleanos (true o false) para comprobar...
    let num : boolean = false; //...si existe algun numero.
    let ltr : boolean = false; //...si existe alguna letra.
    let esp : boolean = false; //...si existe algun caracter especial.
    let tresNumConsecutivos : boolean = false; //...si existe alguna secuencia de 3 numeros consecutivos.


    for (let i : number = 0; i < longitud; i++) {
       
       
        let consecutivos : number = 0; //Total de numeros consecutivos, se formate en cada iteracion del bucle for

        if (isNaN(Number(arr[i])) == true) {

            if (caracteresEspeciales.test(arr[i])) {
                esp = true;

            } else ltr = true;

        } else {

            num = true;
            consecutivos = 1;

            //Mientras el siguiente caracter al actual sea un numero, aumentamos el valor de la variable consecutivos y pasamos al siguiente caracter
            while (!isNaN(Number(arr[i+1]))) {
                consecutivos++;
                i++;
            }
           
        }

        if (consecutivos >= 3) {
            tresNumConsecutivos = true;
        }
    }

    //Primera condicion
    if (num && ltr) nivel += 1;

    //Segunda condicion
    if (tresNumConsecutivos) nivel -= 1;

    //Tercera condicion
    if (longitud > 20) nivel += 2;

    //Cuarta condicion
    if (longitud < 10) nivel -= 1;

    //Quinta condicion
    if (esp) nivel += 1;

    return nivel;

}

//Contraseña de prueba
let password : string = "practica1_ejercicio1";

//Variable para almacenar el nivel de seguridad, retornado por la funcion 'nivelDeSeguridad'
const nivel = nivelDeSeguridad(password);

console.log(nivel)