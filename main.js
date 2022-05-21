import rxjs from 'https://dev.jspm.io/rxjs@7';


let interval$ = rxjs.interval(10000)

interval$.subscribe(val => console.log('val', val));
