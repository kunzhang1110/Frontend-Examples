import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UsersEffect } from './ngrx/store/users.effects';
import { provideHttpClient } from '@angular/common/http';
import { usersReducer } from './ngrx/store/users.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ users: usersReducer }),
    provideEffects([UsersEffect]),
  ],
};
