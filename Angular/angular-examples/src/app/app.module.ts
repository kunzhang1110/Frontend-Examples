import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempComponent } from './basics/temp/temp.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './basics/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'temp', component: TempComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    ButtonComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
