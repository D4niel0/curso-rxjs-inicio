import { asyncScheduler } from "rxjs";

// setTimeout(() => {},3000)
// setInterval(() => {},3000)

const saludar = () => console.log("Hola mundo");
const saludar2 = (nombre) => console.log("Hola ", nombre);

// La primera funcion lp que queremos ejecutar y el segundo el delay
// asyncScheduler.schedule(saludar, 2000);

// Usando argumentos
// asyncScheduler.schedule(saludar2, 2000, "Dani");

const subs = asyncScheduler.schedule(
  // Funcion con el estado (No puede ser flecha)
  function (state) {
    console.log("state", state);
    // Intervalo que se ejecuta
    this.schedule(state + 1, 1000);
  },
  3000,
  // El estado empieza en el número...
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
