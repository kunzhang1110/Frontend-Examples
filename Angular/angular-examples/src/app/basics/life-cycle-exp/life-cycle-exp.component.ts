import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { User } from '../../ngrx/models/user.model';
import { ChangeDetectionExpComponent } from '../change-detection-exp/change-detection-exp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-cycle-exp',
  standalone: true,
  imports: [CommonModule, ChangeDetectionExpComponent],
  templateUrl: './life-cycle-exp.component.html',
  styleUrl: './life-cycle-exp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleExpComponent {
  public user: User;
  @ViewChild(ChangeDetectionExpComponent) changeDetectionExpComponent:
    | ChangeDetectionExpComponent
    | undefined;

  constructor(private cdr: ChangeDetectorRef) {
    this.user = {
      username: 'John',
      password: '000000',
    };
    console.log('Parent - constructor');
  }

  changeUserNameDirectly() {
    this.user!.username = this.user!.username == 'John' ? 'Jane' : 'John';
    // this.changeDetectionExpComponent?.cdr.detectChanges();
  }

  changeNameWithNewObject() {
    //create a new object
    this.user = {
      ...this.user,
      username: this.user!.username == 'John' ? 'Jane' : 'John',
    };
  }

  markForCheck() {
    //mark child as dirty
    this.changeDetectionExpComponent?.cdr.markForCheck();
    // then the change detection starts because of the button click
  }

  ngOnInit() {
    console.log('Parent - ngOnInit');
  }

  ngDoCheck() {
    console.log('Parent - ngDoCheck');
  }

  ngOnChanges() {
    console.log('Parent - ngOnChanges');
  }

  ngAfterContentInit() {
    console.log('Parent - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Parent - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Parent - ngOnDestroy');
  }
}
