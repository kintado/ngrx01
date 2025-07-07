import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateMessage } from '../ngrx/contatore/message.actions';
import { sign } from 'crypto';

@Component({
  selector: 'test2',
  imports: [],
  templateUrl: './test2.html',
  styleUrl: './test2.css'
})
export class Test2 {
  miotesto = signal(''); // esempio di signal, ma non lo usiamo in questo esempio.
  constructor(private store: Store<{  mess: string }>) {
    this.store.select((state) => state.mess).subscribe((state) => {
      this.miotesto.set(state);
      // console.log('Test2: ', state);
      
    });
  }
}
