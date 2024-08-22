import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionExpComponent } from './change-detection-exp.component';

describe('ChangeDetectionExpComponent', () => {
  let component: ChangeDetectionExpComponent;
  let fixture: ComponentFixture<ChangeDetectionExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectionExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
