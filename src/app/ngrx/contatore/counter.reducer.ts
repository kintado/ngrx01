import { createReducer, on  } from "@ngrx/store"; // Importa la funzione createReducer da NgRx. Serve a creare il  reducer

import { increment, decrement } from "./counter.actions";
/* Il reducer è una funzione che dice cosa fare quando arriva un'azione da eseguire.
*/
export const counterReducer = createReducer(
    0, // Lo stato iniziale del contatore è 0 (questo è la "variabile" state)
    on(increment, (state) => state + 1), // Quando arriva l'azione increment, aumenta lo stato di 1
    on(decrement, (state) => state - 1) // Quando arriva l'azione decrement, diminuisce lo stato di 1
);