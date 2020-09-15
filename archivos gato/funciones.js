let turnoJugador1 = true
let turnoJugador2 = true


function marcarCasilla(numero) {
  let casilla = document.getElementById("casilla" + numero);

  let ocupada = estaOcupada (casilla)
  if (!ocupada){
    if (turnoJugador1) {
      casilla.childNodes[0].innerText = "X";
      casilla.classList.add("casilla-rosa");
      casilla.classList.remove("casilla-amarilla");
      turnoJugador1 = false
    }
    else {
      casilla.childNodes[0].innerText = "O";
      casilla.classList.add("casilla-amarilla");
      casilla.classList.remove("casilla-rosa");
      turnoJugador1 = true
    }
  }
  }

function estaOcupada(casilla){
  if (casilla.childNodes[0].innerText) {
    console.log("si esta ocupado");
    return true;
  } else {
    console.log("no esta ocupado");
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
}

function limpiarCasilla(numero){
  let casilla = document.getElementById("casilla" + numero)
  casilla.childNodes[0].innerText = "";
  casilla.classList.remove("casilla-amarilla");
  casilla.classList.remove("casilla-rosa");
}
