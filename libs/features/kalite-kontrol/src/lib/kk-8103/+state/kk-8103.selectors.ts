import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KK_8103_FEATURE_KEY, State } from './kk-8103.reducer';

// Lookup the 'Kk8103' feature state managed by NgRx
export const getKk8103State = createFeatureSelector<State>(KK_8103_FEATURE_KEY);

export const getKk8103oprBilgiKayitLoaded = createSelector(
  getKk8103State,
  (state: State) => state.oprBilgiKayitLoaded
);

export const getKk8103oprBilgiKayitList = createSelector(
  getKk8103State,
  (state: State) => state.oprBilgiKayit
);

export const getKk8103MusteriListLoaded = createSelector(
  getKk8103State,
  (state: State) => state.musteriListLoaded
);

export const getKk8103MusteriList = createSelector(
  getKk8103State,
  (state: State) => state.musteriList
);

export const getKk8103UrunListLoaded = createSelector(
  getKk8103State,
  (state: State) => state.urunListLoaded
);

export const getKk8103UrunList = createSelector(
  getKk8103State,
  (state: State) => state.urunList
);

export const getKk8103KaliteListLoaded = createSelector(
  getKk8103State,
  (state: State) => state.kaliteListLoaded
);

export const getKk8103KaliteList = createSelector(
  getKk8103State,
  (state: State) => state.kaliteList
);

export const selectOprBilgiGorselList = createSelector(
  getKk8103State,
  (state: State) => state.oprBilgilendirmeGorselList
);

export const selectAddOprBilgiGorselSuccess = createSelector(
  getKk8103State,
  (state: State) => state.addKatalogGorselSuccess
);

export const selectOprBilgiGorselListLoaded = createSelector(
  getKk8103State,
  (state: State) => state.oprBilgilendirmeGorselListLoaded
);
