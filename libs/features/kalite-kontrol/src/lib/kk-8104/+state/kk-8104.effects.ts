import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Kk8104Service } from '../service/kk-8104.service';
import * as Kk8104Actions from './kk-8104.actions';

@Injectable()
export class Kk8104Effects {
  initOperatorBilgilendirmeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.initOprBilgilendirmeList),
      switchMap(() =>
        this.service.getOprBilgilendirmeList().pipe(
          map(kkOprBilgilendirmeList =>
            Kk8104Actions.initOprBilgilendirmeListSuccess({
              kkOprBilgilendirmeList,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8104Actions.initOprBilgilendirmeListFailure({ error })
            )
          )
        )
      )
    )
  );

  getOperatorBilgilendirmeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.getOprBilgilendirmeData),
      switchMap(action =>
        this.service.getOprBilgilendirmeData(action.id).pipe(
          map(oprBilgilendirmeData =>
            Kk8104Actions.getOprBilgilendirmeDataSuccess({
              oprBilgilendirmeData,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8104Actions.getOprBilgilendirmeDataFailure({ error })
            )
          )
        )
      )
    )
  );

  updateOprBilgilendirme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.updateOprBilgilendirme),
      switchMap(action =>
        this.service.updateOprBilgilendirme(action.oprBilgilendirme).pipe(
          map(oprBilgilendirme =>
            Kk8104Actions.updateOprBilgilendirmeSuccess({ oprBilgilendirme })
          ),
          catchError(({ error }) =>
            observableOf(Kk8104Actions.updateOprBilgilendirmeFailure({ error }))
          )
        )
      )
    )
  );

  deleteOperatorBilgilendirme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.deleteOprBilgilendirme),
      switchMap(action =>
        this.service.deleteOprBilgilendirme(action.id, action.etag).pipe(
          map(() =>
            Kk8104Actions.deleteOprBilgilendirmeSuccess({
              id: action.id,
            })
          ),
          catchError(({ error }) =>
            observableOf(Kk8104Actions.deleteOprBilgilendirmeFailure({ error }))
          )
        )
      )
    )
  );

  getOprBilgilendirmeGorselList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.getOprBilgilendirmeGorselList),
      switchMap(action =>
        this.service.getOprBilgiGorselList(action.idOperatorBilgilendirme).pipe(
          map(operatorGorselList =>
            Kk8104Actions.getOprBilgilendirmeGorselListSuccess({
              operatorGorselList,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8104Actions.getOprBilgilendirmeGorselListFailure({ error })
            )
          )
        )
      )
    )
  );

  addOprBilgilendirmeGorsel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.addOprBilgilendirmeGorsel),
      switchMap(action =>
        this.service
          .postOprBilgilendirmeGorsel(
            action.idOperatorBilgilendirme,
            action.data
          )
          .pipe(
            map(operatorGorselList =>
              Kk8104Actions.addOprBilgilendirmeGorselSuccess({
                operatorGorselList,
              })
            ),
            catchError(({ error }) =>
              observableOf(
                Kk8104Actions.addOprBilgilendirmeGorselFailure({ error })
              )
            )
          )
      )
    )
  );

  removeOprBilgilendirmeGorsel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8104Actions.removeOprBilgilendirmeGorsel),
      switchMap(action =>
        this.service.deleteOprGorsel(action.gorsel).pipe(
          map(operatorGorselList =>
            Kk8104Actions.removeOprBilgilendirmeGorselSuccess({
              operatorGorselList,
            })
          ),
          catchError(({ error }) =>
            observableOf(
              Kk8104Actions.removeOprBilgilendirmeGorselFailure({ error })
            )
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8104Service
  ) {}
}
