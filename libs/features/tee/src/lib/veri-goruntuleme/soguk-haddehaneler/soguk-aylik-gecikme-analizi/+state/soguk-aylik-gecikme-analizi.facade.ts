import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as SogukAylikGecikmeAnaliziActions from './soguk-aylik-gecikme-analizi.actions';
import * as SogukAylikGecikmeAnaliziSelectors from './soguk-aylik-gecikme-analizi.selectors';

@Injectable()
export class SogukAylikGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getSogukAylikGecikmeAnaliziLoaded));
  allAylikGecikmeAnalizi$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getAllSogukAylikGecikmeAnalizi));
  aylikSoguk1$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getSoguk1AylikGecikmeAnalizi));
  aylikIkmal$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getIkmalAylikGecikmeAnalizi));
  aylikSoguk2$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getSoguk2AylikGecikmeAnalizi));
  yillikSoguk1$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getSoguk1YillikGecikmeAnalizi));
  yillikIkmal$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getIkmalYillikGecikmeAnalizi));
  yillikSoguk2$ = this.store.pipe(select(SogukAylikGecikmeAnaliziSelectors.getSoguk2YillikGecikmeAnalizi));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SogukAylikGecikmeAnaliziActions.init());
  }

  getAylikGecikmeAnalizi(yil: number, ay: number) {
    this.store.dispatch(SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnalizi({ yil, ay }));
  }
}
