import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HedeflerService } from '../services/hedefler.service';
import * as HedeflerActions from './hedefler.actions';

@Injectable()
export class HedeflerEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HedeflerActions.loadHedeflerRequest),
      switchMap(({ year }) =>
        this.service.getHedefler(year).pipe(
          map(({ data }) => HedeflerActions.loadHedeflerSuccess({ hedefler: data })),
          catchError((error) => observableOf(HedeflerActions.loadHedeflerFailure(error)))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HedeflerActions.saveHedeflerRequest),
      switchMap(({ hedefler, year }) =>
        this.service.createHedefler(hedefler).pipe(
          map((response) => HedeflerActions.saveHedeflerSuccess({ message: response.statusText, year })),
          catchError((error) => observableOf(HedeflerActions.saveHedeflerFailure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HedeflerActions.updateHedeflerRequest),
      switchMap(({ hedefler, year }) =>
        this.service.updateHedefler(hedefler, year).pipe(
          map((response) => HedeflerActions.updateHedeflerSuccess({ message: response.statusText, year })),
          catchError((error) => observableOf(HedeflerActions.updateHedeflerFailure({ error })))
        )
      )
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HedeflerActions.saveHedeflerSuccess, HedeflerActions.updateHedeflerSuccess),
      map(({ year }) => HedeflerActions.loadHedeflerRequest({ year }))
    )
  );

  constructor(private actions$: Actions, private service: HedeflerService) {}
}
