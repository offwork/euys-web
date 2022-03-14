import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Up3016Service } from '../services/up-3016.service';
import * as Up3016Actions from './up-3016.actions';

@Injectable()
export class Up3016Effects {
  loadKapasiteRaporGrubu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3016Actions.loadKapasiteRaporGrubuList),
      switchMap(({ kapasiteRapor, urunGrubu }) =>
        this.service.getKapasiteRaporGrubuList(kapasiteRapor, urunGrubu).pipe(
          map(kapasiteRaporGrubuList =>
            Up3016Actions.loadKapasiteRaporGrubuListSuccess({
              kapasiteRaporGrubuList,
            })
          ),
          catchError(error =>
            observableOf(
              Up3016Actions.loadKapasiteRaporGrubuListFailure({ error })
            )
          )
        )
      )
    )
  );

  loadKapasiteRumuzList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3016Actions.loadKapasiteRumuzList),
      switchMap(({ urunGrubu }) =>
        this.service.loadKapasiteTanimRumuzList(urunGrubu).pipe(
          map(rumuzList =>
            Up3016Actions.loadRumuzListSuccess({
              rumuzList,
            })
          ),
          catchError(error =>
            observableOf(Up3016Actions.loadRumuzListFailure({ error }))
          )
        )
      )
    )
  );

  loadRaporRumuzList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3016Actions.loadRaporRumuzList),
      switchMap(({ urunGrubu }) =>
        this.service.loadRaporTanimRumuzList(urunGrubu).pipe(
          map(rumuzList =>
            Up3016Actions.loadRumuzListSuccess({
              rumuzList,
            })
          ),
          catchError(error =>
            observableOf(Up3016Actions.loadRumuzListFailure({ error }))
          )
        )
      )
    )
  );

  updateKapasiteRaporGrubuTanim$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3016Actions.updateKapasiteRaporGrubuTanim),
      switchMap(({ yupKapasiteRaporGrubuTanimlamaModel }) =>
        this.service
          .updateKapasiteRaporGrubuTanim(yupKapasiteRaporGrubuTanimlamaModel)
          .pipe(
            map(yupKapasiteRaporGrubuTanimlamaModel =>
              Up3016Actions.updateKapasiteRaporGrupTanimSuccess({
                yupKapasiteRaporGrubuTanimlamaModel,
              })
            ),
            catchError(error =>
              observableOf(
                Up3016Actions.updateKapasiteRaporGrupTanimFailure({ error })
              )
            )
          )
      )
    )
  );

  deleteKapasiteRaporGrubuTanim$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Up3016Actions.deleteKapasiteRaporGrubuTanim),
      switchMap(({ yupKapasiteRaporGrubuTanimlamaModel }) =>
        this.service
          .deleteKapasiteRaporGrubuTanim(yupKapasiteRaporGrubuTanimlamaModel)
          .pipe(
            map(yupKapasiteRaporGrubuTanimlamaModel =>
              Up3016Actions.deleteKapasiteRaporGrubuTanimSuccess({
                yupKapasiteRaporGrubuTanimlamaModel,
              })
            ),
            catchError(error =>
              observableOf(
                Up3016Actions.deleteKapasiteRaporGrubuTanimFailure({ error })
              )
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Up3016Service
  ) {}
}
