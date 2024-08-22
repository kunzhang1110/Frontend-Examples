import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-exp',
  standalone: true,
  imports: [],
  templateUrl: './observable-exp.component.html',
  styleUrl: './observable-exp.component.scss',
})
export class ObservableExpComponent {
  ngOnInit() {}

  showObservableExample() {
    const data$ = new Observable((observer) => {
      observer.next('Observable Data 1');
      observer.next('Observable Data 2');
      observer.complete();
    });

    data$.subscribe({
      next: (data) => console.log(`Subscriber 1 Received: ${data}`),
      complete: () => console.log('Observable complete'),
    });

    data$.subscribe({
      next: (data) => console.log(`Subscriber 2 Received: ${data}`),
      complete: () => console.log('Observable complete'),
    });
  }

  showSubjectExample() {
    const dataSubject = new Subject<string>();

    dataSubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));
    dataSubject.next('Shared data 1');
    dataSubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));
    dataSubject.next('Shared data 2');
  }
}
