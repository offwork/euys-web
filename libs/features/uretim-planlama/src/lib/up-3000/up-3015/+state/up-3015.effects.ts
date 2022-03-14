import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3015Service } from '../services/up-3015.service';
import * as Up3015Actions from './up-3015.actions';

@Injectable()
export class Up3015Effects {
  loadKapasiteRumuzList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3015Actions.loadKapasiteRumuzList),
      switchMap(({ urunGrubu }) =>
        this.service.loadKapasiteTanimRumuzList(urunGrubu).pipe(
          map(rumuzList =>
            Up3015Actions.loadRumuzListSuccess({
              rumuzList,
            })
          ),
          catchError(error =>
            observableOf(Up3015Actions.loadRumuzListFailure({ error }))
          )
        )
      )
    )
  );

  loadRaporRumuzList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3015Actions.loadRaporRumuzList),
      switchMap(({ urunGrubu }) =>
        this.service.loadRaporTanimRumuzList(urunGrubu).pipe(
          map(rumuzList =>
            Up3015Actions.loadRumuzListSuccess({
              rumuzList,
            })
          ),
          catchError(error =>
            observableOf(Up3015Actions.loadRumuzListFailure({ error }))
          )
        )
      )
    )
  );

  saveKapasiteGrupTanim$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3015Actions.saveKapasiteGrupTanim),
      switchMap(({ yupKapasiteRaporGrubuTanimlamaModel }) =>
        this.service
          .saveKapasiteGrubuTanim(yupKapasiteRaporGrubuTanimlamaModel)
          .pipe(
            map(yupKapasiteRaporGrubuTanimlamaModel =>
              Up3015Actions.saveKapasiteRaporGrupTanimSuccess({
                yupKapasiteRaporGrubuTanimlamaModel,
              })
            ),
            catchError(error =>
              observableOf(
                Up3015Actions.saveKapasiteRaporGrupTanimFailure({ error })
              )
            )
          )
      )
    )
  );

  saveRaporGrupTanim$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3015Actions.saveRaporGrupTanim),
      switchMap(({ yupKapasiteRaporGrubuTanimlamaModel }) =>
        this.service
          .saveRaporGrubuTanim(yupKapasiteRaporGrubuTanimlamaModel)
          .pipe(
            map(yupKapasiteRaporGrubuTanimlamaModel =>
              Up3015Actions.saveKapasiteRaporGrupTanimSuccess({
                yupKapasiteRaporGrubuTanimlamaModel,
              })
            ),
            catchError(error =>
              observableOf(
                Up3015Actions.saveKapasiteRaporGrupTanimFailure({ error })
              )
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3015Service
  ) {}
}
