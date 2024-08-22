import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExpComponent } from './pipe-exp.component';

describe('PipeExpComponent', () => {
  let component: PipeExpComponent;
  let fixture: ComponentFixture<PipeExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
