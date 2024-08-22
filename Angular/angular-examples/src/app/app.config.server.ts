import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UsersEffect } from './ngrx/store/users.effects';
import { provideHttpClient } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
