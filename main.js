//import { Observable, Subject, ReplaySubject, from, of, range } from 'https://dev.jspm.io/rxjs@6/_esm2015';
//import { map, filter, switchMap } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';


if (typof rxjs == 'undefined') {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.1.0/rxjs.umd.js';
  script.setAttribute('crossorigin',"anonymous");
  document.head.appendChild(script);
}

console.log('rxjs installed', rxjs);

let interval$ = rxjs.interval(10000)

interval$.subscribe(val => console.log('val', val));
