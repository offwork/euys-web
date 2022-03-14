import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as SogukTarihGecikmeAnaliziActions from './soguk-tarih-gecikme-analizi.actions';
import * as SogukTarihGecikmeAnaliziSelectors from './soguk-tarih-gecikme-analizi.selectors';

@Injectable()
export class SogukTarihGecikmeAnaliziFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SogukTarihGecikmeAnaliziSelectors.getSogukTarihGecikmeAnaliziLoaded));
  allSoguk1TarihGecikmeAnalizi$ = this.store.pipe(
    select(SogukTarihGecikmeAnaliziSelectors.getAllSoguk1TarihGecikmeAnalizi)
  );
  allSoguk2TarihGecikmeAnalizi$ = this.store.pipe(
    select(SogukTarihGecikmeAnaliziSelectors.getAllSoguk2TarihGecikmeAnalizi)
  );
  allIkmalTarihGecikmeAnalizi$ = this.store.pipe(
    select(SogukTarihGecikmeAnaliziSelectors.getAllIkmalTarihGecikmeAnalizi)
  );

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SogukTarihGecikmeAnaliziActions.init());
  }

  load(baslangic: Date, bitis: Date) {
    this.store.dispatch(SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnalizi({ baslangic, bitis }));
  }
}
