import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next [next]:", value),
  error: (error) => console.warn("error [obs]:", error),
  complete: () => console.info("completado:"),
};
