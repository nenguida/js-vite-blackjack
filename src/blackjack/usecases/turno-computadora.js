import { pedirCarta as pedirNuevaCarta } from "./pedir-carta";
import { valorCarta as valorNuevaCarta } from "./valor-carta";
import { crearCartaHtml as crearCartaNuevaHtml } from "./crear-carta-html";

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos Puntos mínimos que necesita la CPU para ganar
 * @param {Array<String>} deck
 * @param {HTMLElement} HTMLElement Elemento HTML para mostrar los puntos
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora ) => {

    if(!puntosMinimos || !deck || !puntosHTML){
        throw new Error("Es necesario recibir los argumentos en la función");
    }

    let puntosComputadora = 0;

    do {
        const carta = pedirNuevaCarta(deck);

        puntosComputadora = puntosComputadora + valorNuevaCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaNuevaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}