import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectExamplesComponent } from './effect-examples/effect-examples.component';
import { NgRxRoutingModule } from './ngrx-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EffectExamplesComponent],
  imports: [CommonModule, NgRxRoutingModule, ReactiveFormsModule],
})
export class NgrxModule {}
