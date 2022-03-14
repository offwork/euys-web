import { Injectable } from '@angular/core';
import { KusurKatalogView } from '@euys/api-interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, from, of as observableOf } from 'rxjs';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  reduce,
  switchMap,
} from 'rxjs/operators';
import { Kk8101Service } from '../services/kk-8101.service';
import * as Kk8101Actions from './kk-8101.actions';

@Injectable()
export class Kk8101Effects {
  initKusurlar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.initKusurList),
      switchMap(() =>
        this.service.getKusurlarData().pipe(
          map(data => Kk8101Actions.initKusurListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.initKusurListFailure({ error }))
          )
        )
      )
    )
  );

  initKusurSinflari$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.initKusurSinifiList),
      switchMap(() =>
        this.service.getKusurSiniflariData().pipe(
          map(data => Kk8101Actions.initKusurSinifiListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.initKusurSinifiListFailure({ error }))
          )
        )
      )
    )
  );

  initKaliteler$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.initKaliteler),
      switchMap(() =>
        this.service.getKaliteler().pipe(
          map(data => Kk8101Actions.initKalitelerSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.initKalitelerFailure({ error }))
          )
        )
      )
    )
  );

  initKusurAna$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.initKusurAnaList),
      switchMap(() =>
        this.service.getAnaKusurlariData().pipe(
          map(data => Kk8101Actions.initKusurAnaListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.initKusurAnaListFailure({ error }))
          )
        )
      )
    )
  );

  initHatList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.initHatList),
      switchMap(() =>
        this.service.getUtHatList().pipe(
          map(data => Kk8101Actions.initHatListSuccess({ data })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.initHatListFailure({ error }))
          )
        )
      )
    )
  );

  initUrunList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.initUrunList),
      switchMap(() =>
        this.service.getUrunList().pipe(
          map(urunList => Kk8101Actions.initUrunListSuccess({ urunList })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.initUrunListFailure({ error }))
          )
        )
      )
    )
  );

  saveAnaKusur$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.saveKkKusurAna),
      switchMap(action =>
        this.service.saveKkKusurAna(action.kkKusurAna).pipe(
          map(({ data }) =>
            Kk8101Actions.saveKkKusurAnaSuccess({ record: data })
          ),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.saveKkKusurAnaFailure({ error }))
          )
        )
      )
    )
  );

  saveKusur$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.saveKusur),
      switchMap(action =>
        this.service.saveKusur(action.kusur).pipe(
          map(kusur => Kk8101Actions.saveKusurSuccess({ kusur })),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.saveKusurFailure({ error }))
          )
        )
      )
    )
  );

  getKusur$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.getKusur),
      switchMap(action =>
        forkJoin({
          kusur: this.service.getKusurKoduView(action.kusurKodu),
          kusurKatalogViewList: this.service
            .getKusurKtlgHat(action.kusurKodu)
            .pipe(
              switchMap(data => from(data)),
              concatMap(data =>
                this.service.getKusurKtlgHatView(action.kusurKodu, data.hatKodu)
              ),
              reduce(
                (acc: KusurKatalogView[], value: KusurKatalogView) => [
                  ...acc,
                  value,
                ],
                []
              )
            ),
        }).pipe(
          map(({ kusur, kusurKatalogViewList }) =>
            Kk8101Actions.getKusurSuccess({ kusur, kusurKatalogViewList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.getKusurFailure({ error }))
          )
        )
      )
    )
  );

  saveKatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.saveKusurKatalog),
      switchMap(action =>
        this.service.saveOrUpdateKusurKatalog(action.kusurKatalog).pipe(
          map(kusurKatalog =>
            Kk8101Actions.saveKusurKatalogSuccess({ kusurKatalog })
          ),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.saveKusurKatalogFailure({ error }))
          )
        )
      )
    )
  );

  updateKatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.updateKusurKatalog),
      switchMap(action =>
        this.service.saveOrUpdateKusurKatalog(action.kusurKatalog).pipe(
          map(kusurKatalog =>
            Kk8101Actions.updateKusurKatalogSuccess({ kusurKatalog })
          ),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.updateKusurKatalogFailure({ error }))
          )
        )
      )
    )
  );

  deleteKatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.deleteKusurKatalog),
      switchMap(action =>
        this.service
          .deleteKusurKatalog(action.kusurKatalog)
          .pipe(
            map(() =>
              Kk8101Actions.deleteKusurKatalogSuccess({ index: action.index })
            )
          )
      )
    )
  );

  getKatalogComboList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.getKatalogComboList),
      switchMap(action =>
        this.service.getKatalogHatComboList(action.kusurKodu).pipe(
          map(katalogHatComboList =>
            Kk8101Actions.getKatalogComboListSuccess({ katalogHatComboList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.getKatalogComboListFailure({ error }))
          )
        )
      )
    )
  );

  loadKatalogGorselList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.loadKatalogGorselList),
      switchMap(action =>
        this.service.getKusurGorselList(action.kusurKodu, action.hatKodu).pipe(
          map(katalogGorselList =>
            Kk8101Actions.loadKatalogGorselListSuccess({ katalogGorselList })
          ),
          catchError(({ error }) =>
            observableOf(Kk8101Actions.loadKatalogGorselListFailure({ error }))
          )
        )
      )
    )
  );

  addKatalogGorsel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.addKatalogGorsel),
      switchMap(action =>
        this.service
          .postKusurGorsel(action.kusurKodu, action.hatKodu, action.data)
          .pipe(
            map(katalogGorselList =>
              Kk8101Actions.addKatalogGorselSuccess({ katalogGorselList })
            ),
            catchError(({ error }) =>
              observableOf(Kk8101Actions.addKatalogGorselFailure({ error }))
            )
          )
      )
    )
  );

  removeKatalogGorsel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Kk8101Actions.removeKatalogGorsel),
      switchMap(action =>
        this.service
          .deleteKusurGorsel(action.kusurKodu, action.hatKodu, action.gorsel)
          .pipe(
            map(katalogGorselList =>
              Kk8101Actions.removeKatalogGorselSuccess({ katalogGorselList })
            ),
            catchError(({ error }) =>
              observableOf(Kk8101Actions.removeKatalogGorselFailure({ error }))
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: Kk8101Service
  ) {}
}
