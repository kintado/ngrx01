import {createReducer, on} from "@ngrx/store";
import * as Messagections from '../../effetcs/caricamento_messaggi/message.actions'

export interface MessageState {
    message: string;
    error: string | null;
    
}

export const initialMessageState: MessageState = {
    message: '',
    error: null
};


export const messageReducer = createReducer(
    initialMessageState,
    on(Messagections.loadMessageSuccess, (state, { message }) => ({
        ...state,
        message,
        error: null
    })),
    on(Messagections.loadMessageFailure, (state, { error }) => ({
        ...state,
        error
    }))
);