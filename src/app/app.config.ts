import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/contatore/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore({ mycounter: counterReducer })// qui dentro metterò lo stato globale di ngrx che può cambiare in base alle azioni.
    /* Serve un reducer, che è quello che gestisce lo stato (cambia lo stato in base alle azioni)
       e le azioni, che sono gli eventi che possono far scattare il reducer e cambiare lo stato
       */
  ]
};
