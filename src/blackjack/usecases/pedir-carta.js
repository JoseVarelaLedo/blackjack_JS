 /**
  * Función que sirve para tomar carta del mazo
  * @param {Array<string>} mazoCartas 
  * @returns {string} con el número y palo de la carta. Ej: 2H = 2 de corazones (hearts), JS = J de picas (spades)
  */
export const pedirCarta = (mazoCartas) => {

    if (!mazoCartas || mazoCartas.length ===0) 
        throw new Error ('El mazo de cartas ha de enviarse obligatoriamente como array de string');
    //let posicionRandom = getRandomInt (0, mazoCartas.length);
    //let carta = mazoCartas[posicionRandom];
    if (mazoCartas.length === 0) {
        throw new Error ('No hay cartas en el mazo');
    }        
    return mazoCartas.pop();
}

//export default pedirCarta;