import { useState, useEffect } from 'react'
import './App.css'

const JUGADORES = { X: 'Jugador Quisqueya', O: 'Jugador Taíno' }

const LINEAS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

function calcularGanador(casillas) {
  for (const [a, b, c] of LINEAS) {
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return { ganador: casillas[a], linea: [a, b, c] }
    }
  }
  return null
}

function cargarEstado() {
  try {
    const guardado = JSON.parse(localStorage.getItem('tres-en-raya'))
    if (guardado && Array.isArray(guardado.casillas) && guardado.casillas.length === 9) {
      return guardado
    }
  } catch {
    // si falla, empezamos una partida nueva
  }
  return { casillas: Array(9).fill(null), turnoX: true }
}

function Casilla({ valor, onClick, ganadora }) {
  return (
    <button
      className={`casilla ${valor ? valor.toLowerCase() : ''} ${ganadora ? 'ganadora' : ''}`}
      onClick={onClick}
    >
      {valor}
    </button>
  )
}

export default function App() {
  const [casillas, setCasillas] = useState(() => cargarEstado().casillas)
  const [turnoX, setTurnoX] = useState(() => cargarEstado().turnoX)

  const resultado = calcularGanador(casillas)
  const empate = !resultado && casillas.every(Boolean)

  // Guardar la partida cada vez que cambia
  useEffect(() => {
    localStorage.setItem('tres-en-raya', JSON.stringify({ casillas, turnoX }))
  }, [casillas, turnoX])

  function jugar(i) {
    if (casillas[i] || resultado) return
    const nuevas = [...casillas]
    nuevas[i] = turnoX ? 'X' : 'O'
    setCasillas(nuevas)
    setTurnoX(!turnoX)
  }

  function reiniciar() {
    setCasillas(Array(9).fill(null))
    setTurnoX(true)
  }

  let mensaje
  if (resultado) {
    mensaje = `🎉 ¡${JUGADORES[resultado.ganador]} ganó! ¡Dímelo a mí, qué bueno! 🇩🇴`
  } else if (empate) {
    mensaje = '🤝 ¡Empate! Aquí nadie se llevó la bola 🇩🇴'
  } else {
    mensaje = `Turno de: ${JUGADORES[turnoX ? 'X' : 'O']} (${turnoX ? 'X' : 'O'})`
  }

  return (
    <main className="juego">
      <h1>🇩🇴 Tres en Raya Quisqueya</h1>
      <p className="mensaje">{mensaje}</p>

      <div className="tablero">
        {casillas.map((valor, i) => (
          <Casilla
            key={i}
            valor={valor}
            onClick={() => jugar(i)}
            ganadora={resultado?.linea.includes(i)}
          />
        ))}
      </div>

      <button className="reiniciar" onClick={reiniciar}>
        Reiniciar
      </button>
    </main>
  )
}
