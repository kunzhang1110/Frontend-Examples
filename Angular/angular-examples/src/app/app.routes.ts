import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeCycleExpComponent } from './basics/life-cycle-exp/life-cycle-exp.component';
import { effect } from '@angular/core';
import { pipe } from 'rxjs';
import { PipeExpComponent } from './basics/pipe-exp/pipe-exp.component';
import { ObservableExpComponent } from './rxjs/observable-exp/observable-exp.component';
import { MappingOperatorsExpComponent } from './rxjs/mapping-operators-exp/mapping-operators-exp.component';

export const ROUTE_PATHS = {
  ngrx: {
    effect: 'ngrx/effect',
  },
  basics: {
    lifeCycleExp: 'basics/LifeCycleExp',
    pipeExp: 'basics/PipeExp',
  },
  rxjs: {
    observableExp: 'rxjs/observableExp',
    mappingOperatorsExp: 'rxjs/mappingOperators',
  },
};

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./ngrx/ngrx.module').then((module) => module.NgrxModule),
  },
  {
    path: ROUTE_PATHS.basics.lifeCycleExp,
    component: LifeCycleExpComponent,
  },
  {
    path: ROUTE_PATHS.basics.pipeExp,
    component: PipeExpComponent,
  },
  {
    path: ROUTE_PATHS.rxjs.observableExp,
    component: ObservableExpComponent,
  },
  {
    path: ROUTE_PATHS.rxjs.mappingOperatorsExp,
    component: MappingOperatorsExpComponent,
  },
];
