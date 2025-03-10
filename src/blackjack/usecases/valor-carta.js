
/**
 * Esta función obtiene el valor de la carta, número o letra
 * @param {carta<string>} carta Obtener el valor de las cartas
 * @returns {valor<Number>} Devuelve el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}