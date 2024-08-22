import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExpComponent } from './observable-exp.component';

describe('ObservableExpComponent', () => {
  let component: ObservableExpComponent;
  let fixture: ComponentFixture<ObservableExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
