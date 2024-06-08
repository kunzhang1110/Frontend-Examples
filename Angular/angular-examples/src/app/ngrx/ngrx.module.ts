import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectExamplesComponent } from './effect-examples/effect-examples.component';
import { NgRxRoutingModule } from './ngrx-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducer';
import { UsersEffect } from './store/users.effects';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EffectExamplesComponent],
  imports: [
    CommonModule,
    NgRxRoutingModule,
    ReactiveFormsModule
  ]
})
export class NgrxModule { }
