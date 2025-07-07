import { createAction, props } from "@ngrx/store";

export const loadMessage = createAction('[Message Component] Load Message'); // si imiterà a lanciare l'http e restituire qualcosa
export const loadMessageSuccess = createAction('[Message Component] Load Message Success', props<{ message: string }>()); // questo invia il messaggio caricato ad un reducer
export const loadMessageFailure = createAction('[Message Component] Load Message Failure', props<{ error: string }>()); // questo invia l'errore ad un reducer