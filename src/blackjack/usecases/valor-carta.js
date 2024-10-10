/**
 * Función para determinar el valor de cada carta, tomada como string
 * @param {string} carta Ej: 2H, kC, 10D... Un string con el número y palo de la carta
 * @returns {number} con los puntos que vale cada carta, en función de su número y tipo
 */
export const valorCarta = (carta) => { //para el turno del jugador   
    
    if (!carta || carta.length ===0) 
        throw new Error ('La carta ha de mandarse como string, con el formato especificado');
    const valor = carta.substring(0, carta.length - 1); //limpiamos el último carácter, el que corresponde al palo
    
    //versión reducida
     return ((isNaN(valor)))    ? 
            (valor ==='A')      ? 11 : 10
            : valor *1;
    
     // let puntos = 0;
    // if (isNaN (valor)){ //si es figura o as
    //     puntos = (valor === 'A')?11:10;
    // }else{
    //     puntos = valor * 1; //para convertir el valor, que es un string, en un número
    // }

    //return puntos;      
}

//export default valorCarta;