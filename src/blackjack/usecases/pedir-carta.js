// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<string>} deck Recibir el array
 * @returns {carta<string>} Devolver la última carta de la baraja
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}