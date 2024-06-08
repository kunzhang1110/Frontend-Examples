import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ngrx',
    loadChildren: () => import('./ngrx/ngrx.module').then((m) => m.NgrxModule),
  },
];
