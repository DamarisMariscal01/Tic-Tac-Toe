let turnoJugador1 = true
let copiarTablero = [];
let seguimosJugando = true;
let numeroDeJugadores = 2;


function marcarCasilla(numero) {
  let casilla = document.getElementById("casilla" + numero);

  //LA CASILLA ESTÁ OCUPADA???
  let ocupada = estaOcupada (casilla)
  // if(seguimosJugando && !ocupada) {
  if (seguimosJugando) {
    if (!ocupada){
      // Preguntamos de quien es el turno
      if (turnoJugador1) {
        casilla.classList.add("casilla-rosa");
        casilla.classList.remove("casilla-amarilla");
        casilla.childNodes[0].innerText = "X";
        // colocar la misma X pero en el arreglo
        copiarTablero[numero-1] = "X"
        turnoJugador1 = false
        document.getElementById("jugadorEnTurno").innerText = 2;
      }
      else {
        casilla.classList.add("casilla-amarilla");
        casilla.classList.remove("casilla-rosa");
        casilla.childNodes[0].innerText = "O";
        copiarTablero[numero-1] = "O";
        turnoJugador1 = true;
        document.getElementById("jugadorEnTurno").innerText = 1;
      }

      //¿ALGUIEN GANÓ?
      if (revisarGanador()) {
        //BLOQUEAR TABLERO
        seguimosJugando = false;
        //MOSTRAR MENSAJE DE FELICIDADES
        document.getElementById("mensaje-ganador").style.display = "inline-block"
      }
      else {
        // No hubo ganador, pasamos al siguiente jugador
        if (numeroDeJugadores === 1) {
          // Estamos jugando contra CPU
          if (!turnoJugador1) {
            turnoCPU()
          }
        }
      }
    }
  }
  //SALIR
}

function turnoCPU(){
  // Seleccionar un numero Random (aleatorio)
  // Multiplicarlos por 10
  // Redondearlo para evitar decimales
  // Relacionar ese número con casilla correspondiente
  // Revisar si la casilla NO está ocupada
      // Tomar decisión al respecto
  // Regresar a jugador 1
  let numAleatorio = Math.floor(Math.random() * 9) + 1;
    console.log(numAleatorio);
    turnoJugador1 = false;
    marcarCasilla(numAleatorio);
    turnoJugador1 = true;
    // let seleccionCPU = document.getElementById('casilla' + numAleatorio)

    // estaOcupada(seleccionCPU) // AQUI NOS QUEDAMOS
}


function revisarGanador(){
    if (
      (copiarTablero[0] && copiarTablero[0] == copiarTablero[3] && copiarTablero[0] == copiarTablero[6]) ||
      (copiarTablero[1] && copiarTablero[1] == copiarTablero[4] && copiarTablero[1] == copiarTablero[7]) ||
      (copiarTablero[2] && copiarTablero[2] == copiarTablero[5] && copiarTablero[2] == copiarTablero[8])
    ) {
      return true;
    }

    if (
      (copiarTablero[0] && copiarTablero[0] == copiarTablero[1] && copiarTablero[0] == copiarTablero[2]) ||
      (copiarTablero[3] && copiarTablero[3] == copiarTablero[4] && copiarTablero[3] == copiarTablero[5]) ||
      (copiarTablero[6] && copiarTablero[6] == copiarTablero[7] && copiarTablero[6] == copiarTablero[8])
    ){
      return true;
    }

    if (
      (copiarTablero[0] && copiarTablero[0] == copiarTablero[4] && copiarTablero[0] == copiarTablero[8]) ||
      (copiarTablero[2] && copiarTablero[2] == copiarTablero[4] && copiarTablero[2] == copiarTablero[6])
    ){
      return true;
    }
    return false;
}

function estaOcupada(casilla){
  if (casilla.childNodes[0].innerText) {
    return true;
  } else {
      return false;
  }
}

function reiniciarJuego(){
  limpiarCasilla(1)
  limpiarCasilla(2)
  limpiarCasilla(3)
  limpiarCasilla(4)
  limpiarCasilla(5)
  limpiarCasilla(6)
  limpiarCasilla(7)
  limpiarCasilla(8)
  limpiarCasilla(9)
  // window.location.reload();
  copiaTablero = [];
  seguimosJugando = true;
  turnoJugador1 = true;
  document.getElementById('mensaje-ganador').style.display = 'none';
  document.getElementById("jugadorEnTurno").innerText = 1;
}

function limpiarCasilla(numero){
  let casilla = document.getElementById("casilla" + numero)
  //vaciar casilla o texto vacío
  casilla.childNodes[0].innerText = "";
  //quitamos estilos
  casilla.classList.remove("casilla-amarilla");
  casilla.classList.remove("casilla-rosa");
}

function cambiarModoDeJuego () {
    //CAMBIAR EL TEXTO DEL BOTÓN
    //CAMBIAR EL NUMERO DE JUGADORES
    //REINICIAR EL JUEGO

    if(numeroDeJugadores == 2) {
        document.getElementById("modoJuego").innerText = "VS PLAYER";
        numeroDeJugadores = 1;
        turnoJugador1 = true;
    } else {
        document.getElementById("modoJuego").innerText = "VS CPU";
        numeroDeJugadores = 2;
    }
    reiniciarJuego();
}
