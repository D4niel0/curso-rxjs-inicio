import { fromEvent, range } from "rxjs";
import { tap, map } from "rxjs/operators";

// TEXT
const texto = document.createElement("div");

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ligula nisl. Pellentesque dictum, leo eu mattis porta, dui nisi semper lectus, vitae convallis lectus mi in nisl. Fusce ultrices mauris non metus malesuada, at ultricies felis consequat. Phasellus ultricies velit et nunc interdum dapibus. Fusce molestie erat in ipsum mollis sagittis. Praesent semper ipsum ipsum, at vehicula ipsum auctor id. Phasellus mollis ornare lacinia. Sed sodales tellus venenatis, tempor eros vitae, accumsan ante. Aliquam tortor ligula, tincidunt sit amet facilisis vel, interdum id odio. In eleifend magna vitae faucibus ornare. Suspendisse laoreet lectus nec enim pulvinar, vitae porttitor libero fringilla. Donec commodo sollicitudin erat, vitae lacinia eros convallis ac. Duis euismod sed ante ut sodales. Aenean sit amet augue ac turpis gravida luctus. Pellentesque accumsan, lacus a aliquam elementum, nisi velit lobortis enim, vel egestas sem enim sed orci.
<br/><br/>
Cras vitae massa congue, ullamcorper arcu at, pretium eros. Nulla ex tellus, ultrices id tincidunt eget, porta at justo. In pellentesque sollicitudin eros, nec efficitur lacus. Donec commodo, tortor ut posuere hendrerit, ipsum libero lobortis felis, at interdum urna metus ut quam. Duis convallis mattis facilisis. Sed tincidunt ex ac accumsan eleifend. Phasellus at aliquet lectus. Proin ac tincidunt felis. Fusce metus turpis, tempus sollicitudin fringilla eu, lobortis a neque. Vestibulum pellentesque tristique purus in porta. Quisque sit amet accumsan quam. Suspendisse quis odio eleifend, laoreet libero ut, mattis magna. Vestibulum congue feugiat consequat.
<br/><br/>
Morbi id quam porta, condimentum enim quis, luctus purus. Praesent id massa vel sapien laoreet suscipit ut vel elit. Integer efficitur cursus ante, eget aliquam elit auctor eget. Phasellus in mi vitae magna pharetra suscipit vel ac arcu. Fusce hendrerit posuere posuere. Nullam bibendum libero accumsan, vestibulum lacus id, semper turpis. Nullam non tortor sodales, dapibus nulla ac, dapibus risus. Aenean egestas libero magna, in egestas magna bibendum vestibulum. Integer malesuada finibus elit. Phasellus eget tincidunt lacus. Maecenas non neque auctor, fringilla massa eu, sollicitudin eros. Sed in rutrum neque, vitae viverra justo. Curabitur nec ante ullamcorper, malesuada metus vel, elementum libero. Cras eu sagittis massa, euismod laoreet augue. Proin finibus, metus vitae sagittis mollis, nunc metus lobortis arcu, nec maximus turpis felis at neque. Donec eget elit ac ligula convallis pellentesque quis faucibus justo.
<br/><br/>
Nullam maximus sem lacinia sapien bibendum tincidunt. Mauris dignissim ac orci consequat dignissim. Phasellus interdum nisl eget dui varius consequat. Curabitur a enim a urna bibendum venenatis. Donec eu elementum neque, ut mollis est. Donec ultrices, nunc gravida condimentum tincidunt, nisi ligula maximus enim, in consectetur magna orci eget enim. Proin aliquam tortor quis purus fermentum aliquam. Nunc eleifend vulputate maximus. Fusce vel rutrum purus. Morbi non orci sodales, commodo nulla rutrum, vulputate mauris. Mauris quis lobortis enim. Praesent id ante quis odio egestas tristique a quis lectus. Mauris convallis elit blandit dictum convallis. Morbi pretium, felis sit amet placerat aliquet, sem enim ultricies quam, sit amet malesuada mauris quam ac diam. Curabitur eros risus, vehicula eget tellus ut, eleifend suscipit ante. Fusce turpis mauris, tristique sed semper sit amet, faucibus et turpis.
<br/><br/>
Fusce mattis bibendum tincidunt. Quisque est nulla, consequat ut mollis eget, elementum id arcu. Aenean lacinia dapibus velit, sed porttitor tortor iaculis et. Mauris convallis commodo arcu at ornare. Pellentesque id quam et tortor feugiat pellentesque eu eu nibh. Vivamus ut nisl vitae massa ultrices feugiat quis eu eros. Nullam porta nisi quis nisi efficitur pretium sed ac felis. Nulla sit amet dolor eu metus pulvinar tempus. Vivamus aliquam id augue et dictum. In porttitor ex diam, in semper nibh rhoncus vel. Morbi auctor a massa nec fringilla. Pellentesque non massa rhoncus, convallis quam at, vulputate orci. Vivamus varius ante at sem semper, nec dapibus purus accumsan. Nulla aliquam lectus non quam dapibus tristique. Fusce tristique vitae elit quis porttitor.
`;

const body = document.querySelector("body");
body.append(texto);

// PROGRESS BAR
const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Función que haga el calculo del % de scroll
const calcularPorentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  // console.log({ scrollTop, scrollHeight, clientHeight });
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
  map((event) => calcularPorentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
