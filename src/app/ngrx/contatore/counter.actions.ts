import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
/* cosa ho fatto?
   Ho creato due azioni che rappresentano gli eventi che possono far cambiare lo stato!
   Ho usato la funzione createAction di NgRx per definire queste azioni in modo semplice e conciso.
   Il testo tra parentesi quadre è un'etichetta che aiuta a identificare l'origine dell'azione.
   Serve per lo più a noi, per ricordare da dove proviene l'azione, che cosa fa!
   Ciò che sa, attualmente, ngRX è solo che increment e decrement sono due azioni.
   COSA FANNO NON LO SA ANCORA!
   */