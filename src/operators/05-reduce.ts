import { interval, range } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador, valorActual) => acumulador + valorActual;

interval(1000)
  .pipe(take(3), reduce(totalReducer, 0))
  .subscribe({
    next: (val) => console.log("val", val),
    complete: () => console.log("Complete"),
  });
