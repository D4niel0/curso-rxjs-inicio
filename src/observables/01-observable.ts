import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next [next]:", value),
  error: (error) => console.warn("error [obs]:", error),
  complete: () => console.info("completado:"),
};

// CREAR UN OBSERVABLE Y UNA SUBSCRIPCIÓN
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  const a = undefined;
  a.nombre = "Dani";

  subs.complete();
  subs.next("Me escuchas?");
});

// obs$.subscribe( resp => console.log(resp))
// ESTO DE ABAJO ES LO MISMO QUE LO DE ARRIBA
// obs$.subscribe({
//   next: (valor) => console.log("next: ", valor),
//   error: (error) => console.warn("error: ", error),
//   complete: () => console.info("Completado"),
// });

obs$.subscribe(observer);
