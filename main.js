import { map, of, from, interval } from 'rxjs';

let interval$ = interval(10000)

interval$.subscribe(val => console.log('val', val));
