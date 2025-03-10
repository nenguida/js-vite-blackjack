import _ from "underscore";

// Esta función crea un nuevo deck
// Exportar el método para poder usarlo en la clase Index.js
//export const a = "Hola"; // Exportación individual
//export default crearDeck; // Exportación por defecto

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ['A','J','Q','K']
 * @returns {Array<string>} devuelve un nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || !tiposEspeciales){
        throw new Error("Algo no ha ido bien " + console.error()
        );
    }
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}