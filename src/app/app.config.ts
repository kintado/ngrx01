import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { MessageEffects } from './ngrx/effetcs/caricamento_messaggi/message.effect';
import { MessageService } from './ngrx/effetcs/caricamento_messaggi/message.service';
import { messageReducer } from './ngrx/redux/messaggi/messgae.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore({ message: messageReducer }),
    provideEffects([MessageEffects]),
    MessageService
  ]
};
