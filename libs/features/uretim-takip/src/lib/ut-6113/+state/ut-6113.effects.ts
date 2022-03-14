import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as Ut6113Actions from './ut-6113.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Ut6113Service } from '../services/ut-6113.service';

@Injectable()
export class Ut6113Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6113Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({ data }) => Ut6113Actions.loadUt6113Success({ data })),
          catchError(({ error }) =>
            observableOf(Ut6113Actions.loadUt6113Failure({ error }))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6113Actions.saveUt6113),
      switchMap(({ data }) =>
        this.service
          .save(data)
          .pipe(map(({ data }) => Ut6113Actions.saveUt6113Success({ data })))
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6113Actions.deleteUt6113),
      switchMap(({ data }) =>
        this.service
          .delete(data)
          .pipe(map(({ data }) => Ut6113Actions.deleteUt6113Success({ data })))
      )
    )
  );

  listeler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6113Actions.loadListelerUt6113),
      switchMap(() =>
        this.service
          .getListeler()
          .pipe(
            map(({ data }) => Ut6113Actions.loadListelerUt6113Success({ data }))
          )
      )
    )
  );

  findByAnaKod$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6113Actions.findByAnaKodUt6113),
      switchMap(({ anaKod }) =>
        this.service
          .findByDurdurmaAnaKod(anaKod)
          .pipe(
            map(({ data }) => Ut6113Actions.findByAnaKodUt6113Success({ data }))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Ut6113Service
  ) {}
}
