import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1307_FEATURE_KEY, State } from './kt-1307.reducer';

// Lookup the 'Kt1307' feature state managed by NgRx
export const getKt1307State = createFeatureSelector<State>(KT_1307_FEATURE_KEY);

export const getKt1307Loaded = createSelector(
  getKt1307State,
  (state: State) => state.loaded
);

export const getKt1307Error = createSelector(
  getKt1307State,
  (state: State) => state.error
);

export const getKt1307Data = createSelector(
  getKt1307State,
  (state: State) => state.data
);

export const getKt1307AnatabloKomboList = createSelector(
  getKt1307State,
  (state: State) => state.anatabloKomboList
);

export const getKt1307UrunAltGrupKomboList = createSelector(
  getKt1307State,
  (state: State) => state.urunAltGrupKomboList
);

export const getKt1307AmbalajPaketKomboList = createSelector(
  getKt1307State,
  (state: State) => state.ambalajPaketKomboList
);

export const getKt1307DefaultRow = createSelector(
  getKt1307State,
  (state: State) => state.defaultRow
);
