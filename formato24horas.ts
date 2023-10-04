/*
        Alvaro Terron Masoko
        Arquitectura y Programacion de Sistemas en Internet | Practica 1  28/09/23

        Hacer una funcion que transforme fechas de formato 12 horas en formato 24 horas siguiendo el ejemplo:

            "8:00 am" -> "0800"
            "8:00 pm" -> "2000"

*/

const formato24horas = (h : string) : string => {

    //Transformar a minusculas
    h = h.toLowerCase()

    let [horasMinutos, franjaHoraria] : string[] = h.split(' ');

    let [horas, minutos] : string[] = horasMinutos.split(':')

    let hh : number = parseInt(horas);
    let mm : number = parseInt(minutos);

    if (franjaHoraria === "am" && Number(horas) === 12) {
       
        hh = 0;
       
    } else if (franjaHoraria === "pm" && Number(horas) !== 12) {
        hh = hh + 12;
    }

    horas = hh.toString().padStart(2,"0");
    minutos = mm.toString().padStart(2, "0");

    return (horas + minutos);


}

let am : string = "8:00 am";
let pm : string = "8:00 pm";

console.log(`${am}" -> "${formato24horas(am)}`)
console.log(`${pm}" -> "${formato24horas(pm)}`)