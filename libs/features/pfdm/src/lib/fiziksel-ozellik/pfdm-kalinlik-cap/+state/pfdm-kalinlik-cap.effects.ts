import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PfdmKalinlikCapService } from '../services/pfdm-kalinlik-cap.service';
import * as PfdmKalinlikCapActions from './pfdm-kalinlik-cap.actions';

@Injectable()
export class PfdmKalinlikCapEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PfdmKalinlikCapActions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) =>
            PfdmKalinlikCapActions.loadPfdmKalinlikCapSuccess({ data })
          ),
          catchError(({ error }) =>
            observableOf(
              PfdmKalinlikCapActions.loadPfdmKalinlikCapFailure({ error })
            )
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PfdmKalinlikCapActions.save),
      switchMap(action =>
        this.service.saveOrUpdate(action.pfdmKalinlikCap).pipe(
          map(({ data }) =>
            PfdmKalinlikCapActions.savePfdmKalinlikCapSuccess({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(
              PfdmKalinlikCapActions.savePfdmKalinlikCapFailure({ error })
            )
          )
        )
      )
    )
  );
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PfdmKalinlikCapActions.deletePfdm),
      switchMap(action =>
        this.service.delete(action.pfdmKalinlikCap).pipe(
          map(({ data }) =>
            PfdmKalinlikCapActions.deletePfdmKalinlikCapSuccess({
              record: data,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              PfdmKalinlikCapActions.deletePfdmKalinlikCapFailure({ error })
            )
          )
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        PfdmKalinlikCapActions.savePfdmKalinlikCapSuccess,
        PfdmKalinlikCapActions.deletePfdmKalinlikCapSuccess
      ),
      map(() => PfdmKalinlikCapActions.init())
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: PfdmKalinlikCapService
  ) {}
}
