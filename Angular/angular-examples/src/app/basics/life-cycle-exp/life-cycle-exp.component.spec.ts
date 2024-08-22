import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleExpComponent } from './life-cycle-exp.component';

describe('LifeCycleExpComponent', () => {
  let component: LifeCycleExpComponent;
  let fixture: ComponentFixture<LifeCycleExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCycleExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
