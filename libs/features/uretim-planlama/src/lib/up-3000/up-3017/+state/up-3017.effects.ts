import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3017Service } from '../services/up-3017.service';
import * as Up3017Actions from './up-3017.actions';

@Injectable()
export class Up3017Effects {
  loadKapasiteRaporGrubu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3017Actions.loadKapasiteRaporGrubuList),
      switchMap(({ kapasiteRapor, urunGrubu }) =>
        this.service.getKapasiteRaporGrubuList(kapasiteRapor, urunGrubu).pipe(
          map(kapasiteRaporGrubuList =>
            Up3017Actions.loadKapasiteRaporGrubuListSuccess({
              kapasiteRaporGrubuList,
            })
          ),
          catchError(error =>
            observableOf(
              Up3017Actions.loadKapasiteRaporGrubuListFailure({ error })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3017Service
  ) {}
}
