import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from './message.service';
import { loadMessage, loadMessageSuccess, loadMessageFailure } from './message.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {
    private actions = inject(Actions);
    private messageService = inject(MessageService);

    loadMessage$ = createEffect(() =>
        this.actions.pipe(
            ofType(loadMessage),
            mergeMap(() =>
                this.messageService.getMessage().pipe(
                    
                    map(res => {
                        
                        return loadMessageSuccess({ message: res.message  });
                    }),
                    catchError(error => of(loadMessageFailure({ error })))
                    
                )
            )
        )
    );
}