//import { map, of, from, interval } from 'rxjs';
import { Observable, Subject, ReplaySubject, from, of, range } from 'https://dev.jspm.io/rxjs@6/_esm2015';
import { map, filter, switchMap, interval } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';


let interval$ = interval(10000)

interval$.subscribe(val => console.log('val', val));
