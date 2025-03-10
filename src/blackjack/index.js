// Importar las dependencias de la clase

// Importar el método de la clase establecida para poder usarlo en esta (Ctrl + Space) y asigno un alias para saber que estoy trabajando en este archivo en vez de creer que referencio al otro
import { crearDeck as crearNuevoDeck } from "./usecases/crear-deck.js";
import { pedirCarta as pedirNuevaCarta } from "./usecases/pedir-carta.js";
import {valorCarta as valorNuevaCarta} from "./usecases/valor-carta.js"
import { turnoComputadora as turnoNuevoComputadora } from "./usecases/turno-computadora.js";
import { crearCartaHtml as crearCartaNuevaHtml } from "./usecases/crear-carta-html";

// import { crearDeck, pedirCarta, valorCarta } from "./usecases";


let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Crear un módulo que tiene la función de crear un deck
deck = crearNuevoDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirNuevaCarta(deck);
    
    puntosJugador = puntosJugador + valorNuevaCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaNuevaHtml(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoNuevoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoNuevoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoNuevoComputadora( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearNuevoDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
