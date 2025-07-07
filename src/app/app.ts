import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { MessageState } from './ngrx/redux/messaggi/messgae.reducer';
import { loadMessage } from './ngrx/effetcs/caricamento_messaggi/message.actions';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>{{ title }}</h1>
    
    <p>Per recuperare il messaggio, clicca il pulsante qui sotto:</p>
    
   <button (click)="recuperaMessaggio()">Recupera Messaggio</button>
   <p style="font-weight: bold;">Messaggio: {{ message() }}</p>
    `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'counter01';
  private store = inject(Store<{ message: MessageState}>);
  message = signal<string>('');
  
  constructor() {

    this.store.pipe(select((state) => state.message)).subscribe({
      next: (dati) => {
       // alert('Messaggio recuperato: ' + dati.message);
        this.message.set(dati.message);
      },
      error: (error) => {
        alert('Messaggio non recuperato: !');
        this.message.set('Errore nel caricamento del messaggio: ' + error);
      }
    });
  }



  recuperaMessaggio() {
    this.store.dispatch(loadMessage());
  }
  
}
