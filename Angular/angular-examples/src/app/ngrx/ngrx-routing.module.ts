import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectExamplesComponent } from './effect-examples/effect-examples.component';


const routes: Routes = [
  { path: 'effect', component: EffectExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxRoutingModule { }