import {crearMazo , pedirCarta , valorCarta} from './usecases';

const juego = (() => {
  'use strict'


  let  puntosJugadores = [], 
       ordenadorSePasa = false;

  const   scores              = document.querySelectorAll('small'),
          divCartasJugadores  = document.querySelectorAll('.divCartas');

  //referemcoas HTML
  const btnStart          = document.querySelector('#btnStart'),
        btnPedirCarta     = document.querySelector('#btnPedir'),
        btnPlantarse      = document.querySelector('#btnPlantarse');

  const inicializarJuego = ( numJugadores = 2 )=>{
      btnPedir.disabled = false;
      btnPlantarse.disabled = false;   
      mazoCartas = crearMazo(tipos, figuras);
      puntosJugadores = [];
      for ( let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }       
      scores.forEach(elemento => elemento.innerText = 0);     
      divCartasJugadores.forEach (elemento => elemento.innerHTML = '');                
  }  

  //Turno : 0 = primer jugador y último siempre es el ordenador
  const acumularPuntos = ( carta, turno ) => {
      puntosJugadores [turno] = puntosJugadores [turno] + valorCarta(carta);
      scores[turno].innerText = puntosJugadores [turno]; 
      return puntosJugadores[turno];
  }

  const crearCarta = ( carta, turno ) => {
      const imgCarta = document.createElement('img'); //creamos elemento de tipo imagen en el HTML
      imgCarta.src = `assets/cartas/${carta}.png`; //buscamos la que coincida con la numeración entre las que haya en las imágenes
      imgCarta.classList.add('carta'); //añadir clase CSS
      divCartasJugadores[turno].append(imgCarta); //añadirla al div correspondiente
  }

  //lógica del turno del ordenador
  const turnoOrdenador = (puntosJugador) => {
      let puntosOrdenador = 0;
      do {
          const carta = pedirCarta(mazoCartas);
          const turno = puntosJugadores.length -1;
          puntosOrdenador = acumularPuntos(carta, turno);           
          crearCarta(carta, turno);
          if (puntosJugador > 21) {
              break;
          }
      } while ((puntosOrdenador < puntosJugador) );

      ordenadorSePasa = puntosOrdenador > 21;
      setTimeout(() => {
          determinarGanador();
      }, 20);
  } 
  

  const determinarGanador = () => {
      btnPedirCarta.disabled = true;
      btnPlantarse.disabled = true;
      //const [puntosMinimos, puntosOrdenador] = puntosJugadores;
      
      setTimeout(() => {
          if (ordenadorSePasa && puntosJugadores[0] <= 21) {
              alert('Jugador gana :)');
          } else {
              alert('Gana la máquina :(');
          }
      }, 10);
  }

  //eventos
  btnPedirCarta.addEventListener('click', () => {
      const carta = pedirCarta(mazoCartas);
      const puntosJugador = acumularPuntos (carta, 0);
      crearCarta (carta, 0);

      if (puntosJugador > 21) {
          btnPedirCarta.disabled = true;
          btnPlantarse.disabled = true;
          alert('Te pasaste!');
          setTimeout(() => {
              turnoOrdenador(puntosJugador);
          }, 10);
      } else if (puntosJugador === 21) {
          btnPedirCarta.disabled = true;
          btnPlantarse.disable = true;
          alert('21!!! Genial!');
          setTimeout(() => {
              turnoOrdenador(puntosJugadores[0]);
          }, 10);
      }
  });

  btnStart.addEventListener('click', () => {  
      inicializarJuego(); 
  });

  btnPlantarse.addEventListener('click', () => {
      btnPedirCarta.disabled = true;
      btnPlantarse.disabled = true;
      turnoOrdenador(puntosJugadores[0]);
  });

  // function getRandomInt(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min) + min);
  //   }

  return {        
      nuevoJuego: inicializarJuego
  };

})();


