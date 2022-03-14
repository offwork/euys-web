import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { YillikUretimPlaniService } from '../services/yillik-uretim-plani.service';
import * as actions from './yillik-uretim-plani.actions';

@Injectable()
export class YillikUretimPlaniEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      switchMap(({ year, id, idYupBazAna }) =>
        forkJoin([
          this.service.getOzet(year, id),
          this.service.getProjeksiyonUretimHedef(year, id),
          this.service.getProjeksiyonKapasiteGrup(year, id),
          this.service.getProjeksiyonUrunBazinda(year, id),
          this.service.getProjeksiyonRumuzBazinda(year, id),
          this.service.getPlanliDuruslar(idYupBazAna),
        ]).pipe(
          map(
            ([
              ozet,
              uretimHedefleriList,
              kapasiteBazindaList,
              urunBazindaList,
              rumuzBazindaList,
              planliDuruslar,
            ]) =>
              actions.done({
                ozet,
                uretimHedefleriList,
                kapasiteBazindaList,
                urunBazindaList,
                rumuzBazindaList,
                planliDuruslar,
              })
          ),
          catchError(() => observableOf(actions.fail()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private service: YillikUretimPlaniService
  ) {}
}
