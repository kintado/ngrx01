import { Component, signal } from '@angular/core';

import { Store } from '@ngrx/store';
import { increment, decrement } from './ngrx/contatore/counter.actions';
import { Test } from "./test/test";

@Component({
  selector: 'app-root',
  imports: [Test],
  template: `
    <h1>{{ title }}</h1>
   
    <button (click)="onDecrementButtonClick()">Decrement</button>
     <button (click)="onIncrementButtonClick()">Increment</button>
    <p [style.color]="color">Contatore: {{ valoreArrivatoDalloStore() }}</p>
    <hr>
    <test></test>
    `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'counter01';
  valoreArrivatoDalloStore = signal(0);
  color: string = 'red';
  constructor(private store: Store<{ mycounter: number }>) {

     /*
     Stiamo injectando il servizio store di NgRX...
     dentro app.config.ts abbiamo detto a NgRX di usare il reducer counterReducer ( provideStore({ mycounter: counterReducer }) )
     mycounter indicato in 
     provideStore({ mycounter: counterReducer })
      è il nome dello stato globale che stiamo creando con NgRX.
      Abbiamo detto che lo Store avrà uno stato globale chiamato mycounter.
      In provideStore abbiamo assegnato come tipo counterReducer, ma qui abbiamo detto che lo stato sarà di tipo number.
      PERCHRÉ COSì?
      Perché il reducer counterReducer restituisce un numero, che è lo stato del contatore (il reducer restituisce solo lo stato e lo stato sarà un numero).
      Quindi qui lo dichiariamo direttamente come un numero.
     */
     // ora gli dobbiamo direr cosa fare quando cambia lo stato globale di NgRX.
     this.store.select('mycounter').subscribe((state) => {
      if (state % 2 === 0) {
        this.color = 'green';
      } else {
        this.color = 'red';   
      }
      this.valoreArrivatoDalloStore.set(state*2);
      

     // alert(`Lo stato globale di NgRX è cambiato: ${state}`);
    });
  }


  onIncrementButtonClick() {
    this.store.dispatch(increment());
    // quando clicco il bottone increment, chiamo l'azione increment che abbiamo definito in counter.actions.ts
    // questa azione farà scattare il reducer counterReducer che cambierà lo stato globale di NgRX.
  }

  onDecrementButtonClick() {
    this.store.dispatch(decrement());
    // quando clicco il bottone decrement, chiamo l'azione decrement che abbiamo definito in counter.actions.ts
    // questa azione farà scattare il reducer counterReducer che cambierà lo stato globale di NgRX.
  }

}
