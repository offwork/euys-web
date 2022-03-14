import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1206Service } from '../services/kt-1206.service';
import * as Kt1206Actions from './kt-1206.actions';

@Injectable()
export class Kt1206Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1206Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Kt1206Actions.loadKt1206Success({ data })),
          catchError((error) => observableOf(Kt1206Actions.loadKt1206Failure({ error })))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1206Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.ktAtAlkaliTemizleme).pipe(
          map(({ data }) => Kt1206Actions.saveKt1206Success({ record: data })),
          catchError((error) => observableOf(Kt1206Actions.saveKt1206Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1206Actions.saveKt1206Success),
      map(() => Kt1206Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1206Service) {}
}
