import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as HedefFiiliGrafikActions from './hedef-fiili-grafik.actions';
import * as HedefFiiliGrafikSelectors from './hedef-fiili-grafik.selectors';

@Injectable()
export class HedefFiiliGrafikFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(HedefFiiliGrafikSelectors.getHedefFiiliGrafikLoaded)
  );
  lines$ = this.store.pipe(select(HedefFiiliGrafikSelectors.getLines));

  hedefFiiliGrafik$ = this.store.pipe(
    select(HedefFiiliGrafikSelectors.getHedefFiiliGrafik)
  );

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(HedefFiiliGrafikActions.init());
    this.store.dispatch(HedefFiiliGrafikActions.linesRequestLoad());
  }

  load(yil: number, hatKodu: string) {
    this.store.dispatch(
      HedefFiiliGrafikActions.loadHedefFiiliGrafik({
        yil,
        hatKodu,
      })
    );
  }
}
