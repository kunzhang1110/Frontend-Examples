import { Component } from '@angular/core';
import {
  delay,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  timestamp,
} from 'rxjs';

@Component({
  selector: 'app-mapping-operators-exp',
  standalone: true,
  imports: [],
  templateUrl: './mapping-operators-exp.component.html',
  styleUrl: './mapping-operators-exp.component.scss',
})
export class MappingOperatorsExpComponent {
  ngOnInit() {
    const searchBox = document.getElementById('search') as HTMLInputElement;

    fromEvent(searchBox, 'input')
      .pipe(
        map((event: any) => event.target.value),
        switchMap((searchTerm) => this.performAction(searchTerm))
      )
      .subscribe((result) => {
        console.log(result);
      });

    const exhaustMapBtn = document.getElementById(
      'exhaustMapBtn'
    ) as HTMLButtonElement;

    fromEvent(exhaustMapBtn, 'click')
      .pipe(exhaustMap(() => this.performAction('exhaustMapBtn')))
      .subscribe((result) => {
        console.log(result);
      });

    const mergeMapBtn = document.getElementById(
      'mergeMapBtn'
    ) as HTMLButtonElement;
    fromEvent(mergeMapBtn, 'click')
      .pipe(mergeMap(() => this.performAction('mergeMapBtn')))
      .subscribe((result) => {
        console.log(result);
      });
  }

  performAction(data: string) {
    return of(`${new Date().toISOString()} - ${data}`).pipe(delay(1000));
  }
}
