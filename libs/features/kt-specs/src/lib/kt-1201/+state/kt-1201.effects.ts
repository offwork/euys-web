import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1201Service } from '../services/kt-1201.service';
import * as Kt1201Actions from './kt-1201.actions';

@Injectable()
export class Kt1201Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1201Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1201Actions.loadKt1201Success({ data })),
          catchError(({ error }) => observableOf(Kt1201Actions.loadKt1201Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1201Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAt1SckHadIkmalSicakl).pipe(
          map(({ data }) => Kt1201Actions.saveKt1201Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1201Actions.saveKt1201Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1201Actions.saveKt1201Success),
      map(() => Kt1201Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1201Service) {}
}
