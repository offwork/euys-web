import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as Kt1225Actions from './kt-1225.actions';
import { of as observableOf } from 'rxjs';
import { Kt1225Service } from '../services/kt-1225.service';
import { catchError, map, switchMap } from 'rxjs/operators';


@Injectable()
export class Kt1225Effects {
  
    init$ = createEffect(() =>
      this.actions$.pipe(
        ofType(Kt1225Actions.init),
        switchMap(() =>
          this.service.getData().pipe(
            map(({ data }) => Kt1225Actions.loadKt1225Success({ data })),
            catchError(({ error }) => observableOf(Kt1225Actions.loadKt1225Failure({ error })))
          )
        )
      )
    ); 

    save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1225Actions.save),
      switchMap((action) =>
          this.service.saveOrUpdate(action.ktAtDualBazliKaliteSckHadde).pipe(
          map(({ data }) => Kt1225Actions.saveKt1225Success({ record: data })),
          catchError(({ error }) => observableOf(Kt1225Actions.saveKt1225Failure({ error })))
        )
      )
    )
   );

   reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kt1225Actions.saveKt1225Success),
      map(() => Kt1225Actions.init())
    )
   );

  constructor(private readonly actions$: Actions, private service: Kt1225Service) {}
}
