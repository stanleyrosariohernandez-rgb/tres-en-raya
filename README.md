# 🇩🇴 Tres en Raya Quisqueya

**Autor:** TU NOMBRE COMPLETO

## Descripción

Juego de Tres en Raya (Tic-Tac-Toe) hecho con React.js y Vite, con un toque dominicano. Dos jugadores, **Jugador Quisqueya (X)** y **Jugador Taíno (O)**, se turnan en un tablero de 3x3. El juego detecta al ganador (resaltando las tres casillas), detecta el empate, tiene un botón **Reiniciar** y guarda la partida en el navegador con `localStorage`, así que no se pierde al recargar la página. El diseño usa los colores de la bandera dominicana y muestra mensajes finales con frases dominicanas.

## Características

- Tablero 3x3 con botones.
- Turnos alternados entre X y O con `useState`.
- Detección de ganador y de empate.
- Botón "Reiniciar".
- Partida guardada con `localStorage` y `useEffect`.
- Estilos con CSS en colores patrios.

## Qué aprendí

Con este proyecto aprendí cómo funciona React por dentro. Entendí que la interfaz se divide en componentes, como `Casilla`, que reciben información por medio de `props`. Aprendí que el estado, manejado con `useState`, es lo que hace que la pantalla cambie sola: cada vez que se juega una casilla, React vuelve a dibujar el tablero con los datos nuevos.

También aprendí a usar `useEffect` junto con `localStorage` para guardar la partida automáticamente, y me di cuenta de lo útil que es que el juego recuerde el tablero aunque recargue la página. Practiqué cómo se calcula un ganador revisando las 8 combinaciones posibles de líneas, y cómo usar CSS Grid para armar el tablero.

Fuera del código, aprendí a trabajar con Git: hacer commits para guardar mi avance, revisar el historial con `git log` y subir el proyecto a GitHub. Además, aprendí a leer los mensajes de error de la terminal en vez de asustarme con ellos.

## Qué fue lo más difícil

Lo más difícil fue preparar el entorno en Windows. Al crear el proyecto, PowerShell bloqueó el comando `npm` porque la ejecución de scripts estaba deshabilitada, y los comandos siguientes fallaron en cadena. Tuve que investigar el error y resolverlo cambiando la política de ejecución y usando el Command Prompt. También me confundí al principio con las preguntas del instalador de Vite (como la del linter) y con abrir la carpeta correcta del proyecto en VS Code.

Ya con el juego programado, el siguiente reto fue que el tablero se veía como una línea recta en vez de una cuadrícula 3x3. Tuve que revisar con calma `App.css`, `index.css` y `main.jsx` hasta encontrar qué estaba afectando los estilos. Esto me enseñó que los errores pequeños de configuración pueden tardar más en resolverse que el código mismo, y que revisar paso a paso es la mejor estrategia.

## Cómo ejecutarlo

1. Clona o descarga el proyecto.
2. Instala las dependencias: `npm install`
3. Inicia el juego: `npm run dev`
4. Abre `http://localhost:5173` en el navegador.

## Captura de pantalla
