import { asyncScheduler, observeOn, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
// El asynScheduler convierte en asincrono el observable
// DEPRECATED:
// const src$ = range(1, 5, asyncScheduler);
// ACTUAL
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log("inicio");

src$.subscribe(console.log);

console.log("fin");
