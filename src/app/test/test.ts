import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../ngrx/contatore/counter.actions';


@Component({
  selector: 'test',
  imports: [],
  template: `<div #riportiamotutto>Test Component</div>
  `,
  styleUrl: './test.css'
})
export class Test {
  @ViewChild('riportiamotutto') riportiamotutto!: ElementRef;
  
  constructor(private store: Store<{ mycounter: number }>) {
    this.store.select((state)=> state.mycounter).subscribe((state) => {
      this.riportiamotutto.nativeElement.innerText = `Test Component - Counter: ${state}`;
    });
  }



}
