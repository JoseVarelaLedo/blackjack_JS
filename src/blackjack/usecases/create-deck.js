import _ from 'underscore';
/**
 * Esta función sirve para crear el mazo de cartas
 * @param {Array<string>} tipos  Ej: ['C', 'D', 'H', 'S'] ->cada palo
 * @param {Array<string>} figuras Ej: ['A', 'J', 'Q', 'K'] -> as, j, reina y rey
 * @returns {Array<string>} un arreglo con el mazo barajado
 */
//
export const crearMazo = (tipos, figuras) => {  
    
    if (!tipos || tipos.length ===0) 
        throw new Error ('Los tipos de cartas han de enviarse obligatoriamente como array de string');
    if (!figuras || figuras.length ===0) 
        throw new Error ('Las figuras han de enviarse obligatoriamente como array de string');
    let mazoCartas = [];
    for (let i = 2; i < 11; i++) { //se inicializa en 2 porque es el número de carta más bajo
        for (let tipo of tipos) {
            mazoCartas.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let figura of figuras) {
            mazoCartas.push(figura + tipo);
        }
    }                
    return _.shuffle(mazoCartas); //barajado del mazo usando librería underscore    
}

// export default crearMazo;