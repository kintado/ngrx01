import { createAction, props } from "@ngrx/store";

export const updateMessage = createAction('[Message Component] Update Message', props<{ message: string }>());