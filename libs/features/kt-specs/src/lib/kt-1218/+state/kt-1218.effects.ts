import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kt1218Service } from '../services/kt-1218.service';
import * as Kt1218Actions from './kt-1218.actions';

@Injectable()
  export class Kt1218Effects {
    init$ = createEffect(() =>
      this.actions$.pipe(
        ofType(Kt1218Actions.init),
        switchMap(() =>
          this.service.getData().pipe(
            map(({ data }) => Kt1218Actions.loadKt1218Success({ data })),
            catchError(({ error }) => observableOf(Kt1218Actions.loadKt1218Failure({ error })))
          )
        )
      )
    );

    save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1218Actions.save),
      switchMap((action) =>
        this.service.saveOrUpdate(action.KtCgl12HavaSogutma).pipe(
          map(({ data }) => Kt1218Actions.saveKt1218Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1218Actions.saveKt1218Failure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1218Actions.saveKt1218Success),
      map(() => Kt1218Actions.init())
    )
  );

  constructor(private readonly actions$: Actions, private service: Kt1218Service) {}
}
