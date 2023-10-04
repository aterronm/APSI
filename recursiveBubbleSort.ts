/*
        Alvaro Terron Masoko
        Arquitectura y Programacion de Sistemas en Internet | Practica 1  28/09/23

        Hacer una funcion que tenga un parametro de entrada que sea un array y en el cual se implemente un algoritmo de ordenacion Bubble sort.
        Criterio: debe ser recursivo.

        El algoritmo de ordenacion burbuj o bubble sort en ingles, consiste en comparar cada elemento con el de su derecha e intercambiar sus
        posiciones si estas estan en orden incorrecto.

*/

const recbubbleSort = (numeros: number[]) : number[] => {

    let intercambio: boolean = false; //Variable para comprobar si se ha realizado intercambio en la iteraccion
  
    let i = 0;
    while (i < numeros.length - 1) { //Bucle para recorrer el array de numeros
  
      //Si el numero actual es mayor que el numero a su derecha/siguiente...
      if (numeros[i] > numeros[i + 1]) {
  
        let aux: number = numeros[i]; //Variable auxiliar para el intercambio
  
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = aux;
        intercambio = true; //indica un intercambio
  
      }
  
      i++;
    }
  
    if (intercambio == true) { //Si se realizo al menos un intercambio, se llama de nuevo a la funcion para continuar ordenando
      recbubbleSort(numeros);
    }
  
    return numeros; //Retorna el array ordenado
  }

// Ejemplo
const arr = [23, 73, 48, 28, 23, 30, 35];
const arrOrdenado = recbubbleSort(arr);
console.log(arrOrdenado);