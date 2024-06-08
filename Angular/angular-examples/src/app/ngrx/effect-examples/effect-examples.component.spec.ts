import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectExamplesComponent } from './effect-examples.component';

describe('EffectExamplesComponent', () => {
  let component: EffectExamplesComponent;
  let fixture: ComponentFixture<EffectExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EffectExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
