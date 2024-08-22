import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChange,
} from '@angular/core';
import { User } from '../../ngrx/models/user.model';
import db from '../../../../db/db-original.json';

@Component({
  selector: 'app-change-detection-exp',
  standalone: true,
  imports: [],
  templateUrl: './change-detection-exp.component.html',
  styleUrl: './change-detection-exp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionExpComponent {
  @Input() user: User | undefined;

  constructor(public cdr: ChangeDetectorRef) {
    console.log('Child - constructor');
  }

  ngOnInit() {
    console.log('Child - ngOnInit');
  }

  ngDoCheck() {
    console.log('Child - ngDoCheck');
    console.log(this.user);
  }

  ngOnChanges() {
    //only the refernce changes in input will be trigger
    console.log('Child - ngOnChanges');
  }
  ngAfterContentInit() {
    console.log('Child - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child - ngOnDestroy');
  }
}
