import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBasicExpComponent } from './reactive-form-basic-exp.component';

describe('ReactiveFormBasicExpComponent', () => {
  let component: ReactiveFormBasicExpComponent;
  let fixture: ComponentFixture<ReactiveFormBasicExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormBasicExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormBasicExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
