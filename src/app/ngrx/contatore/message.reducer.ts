import { createReducer, on } from "@ngrx/store";
import { updateMessage } from "./message.actions";

export const messageReducer = createReducer('', on(updateMessage, (state, action) => {
    // console.log('Message Reducer: ', action.message);
    return action.message || state;
}));