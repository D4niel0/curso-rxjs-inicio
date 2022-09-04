import { fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5)
//   .pipe(map<number, string>((val) => (val * 10).toString()))
//   .subscribe(console.log);

// MAP
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupCode$ = keyup$.pipe(map((event) => event.code));

// PLUCK (DEPRECATED)
const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

// MAPTO (DEPRECATED)
const keyupMapTo$ = keyup$.pipe(mapTo("tecla presionada"));

// OBSERVERS
keyupCode$.subscribe((code) => console.log("map", code));
keyupPluck$.subscribe((code) => console.log("pluck", code));
keyupMapTo$.subscribe((code) => console.log("mapTo", code));
