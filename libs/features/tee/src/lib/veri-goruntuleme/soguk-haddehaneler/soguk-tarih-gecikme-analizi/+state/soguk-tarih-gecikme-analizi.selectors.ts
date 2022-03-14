import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY, State } from './soguk-tarih-gecikme-analizi.reducer';

// Lookup the 'SogukTarihGecikmeAnalizi' feature state managed by NgRx
export const getSogukTarihGecikmeAnaliziState = createFeatureSelector<State>(SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY);

export const getSogukTarihGecikmeAnaliziLoaded = createSelector(
  getSogukTarihGecikmeAnaliziState,
  (state: State) => state.loaded
);

export const getSogukTarihGecikmeAnaliziError = createSelector(
  getSogukTarihGecikmeAnaliziState,
  (state: State) => state.error
);

export const getAllSoguk1TarihGecikmeAnalizi = createSelector(
  getSogukTarihGecikmeAnaliziState,
  (state: State) => state.soguk1
);

export const getAllIkmalTarihGecikmeAnalizi = createSelector(
  getSogukTarihGecikmeAnaliziState,
  (state: State) => state.ikmal
);

export const getAllSoguk2TarihGecikmeAnalizi = createSelector(
  getSogukTarihGecikmeAnaliziState,
  (state: State) => state.soguk2
);
