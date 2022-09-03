import { fromEvent } from "rxjs";

/* 
Eventos del DOM
*/
// Escucha el click
const src1$ = fromEvent<MouseEvent>(document, "click");
// Escucha el keyup
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("Next: ", val),
};

// Con destructuración de objetos
src1$.subscribe(({ x, y }) => {
  console.log(x, y);
});
// Pintar el key
src2$.subscribe((evento) => {
  console.log(evento.key);
});
