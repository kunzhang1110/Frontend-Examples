import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingOperatorsExpComponent } from './mapping-operators-exp.component';

describe('MappingOperatorsExpComponent', () => {
  let component: MappingOperatorsExpComponent;
  let fixture: ComponentFixture<MappingOperatorsExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MappingOperatorsExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MappingOperatorsExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
