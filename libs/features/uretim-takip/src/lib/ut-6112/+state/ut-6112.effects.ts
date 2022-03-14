import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as Ut6112Actions from './ut-6112.actions';
import {catchError, map, switchMap} from "rxjs/operators";
import {of as observableOf} from "rxjs";
import {Ut6112Service} from "../services/ut-6112.service";

@Injectable()
export class Ut6112Effects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6112Actions.init),
      switchMap(() =>
        this.service.getData().pipe(
          map(({data}) => Ut6112Actions.loadUt6112Success({data})),
          catchError(({error}) =>
            observableOf(Ut6112Actions.loadUt6112Failure({error}))
          )
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6112Actions.saveUt6112),
      switchMap(({data}) =>
        this.service.save(data).pipe(
          map(({data}) => Ut6112Actions.saveUt6112Success({data})),
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Ut6112Actions.deleteUt6112),
      switchMap(({data}) =>
        this.service.delete(data).pipe(
          map(({data}) => Ut6112Actions.deleteUt6112Success({data})),
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private service: Ut6112Service) {
  }
}
