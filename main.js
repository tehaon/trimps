import { Observable, Subject, ReplaySubject, from, of, range } from 'https://dev.jspm.io/rxjs@6/_esm2015';
import { map, filter, switchMap, interval } from 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/8.0.0-alpha.3/rxjs.umd.min.js';


let interval$ = interval(10000)

interval$.subscribe(val => console.log('val', val));
