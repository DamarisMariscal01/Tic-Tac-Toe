let turnoJugador1 = true
let turnoJugador2 = true

function marcarCasilla(numero) {
  let casilla = document.getElementById("c" + numero);
  casilla.childNodes[0].innerText = "X"

  if (turnoJugador1) {
    casilla.childNodes[0].innerText = "X";
    casilla.classList.add("casilla-rosa");
    casilla.classList.remove("casilla-amarilla");
    turnoJugador1 = false
  }
  else {
    casilla.childNodes[0].innerText = "0";
    casilla.classList.add("casilla-amarilla");
    casilla.classList.remove("casilla-rosa");
    turnoJugador1 = true
  }
}

console.log("Jd");
