import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KT_1344_FEATURE_KEY, State } from './kt-1344.reducer';

// Lookup the 'Kt1344' feature state managed by NgRx
export const getKt1344State = createFeatureSelector<State>(KT_1344_FEATURE_KEY);

export const getKt1344Loaded = createSelector(
  getKt1344State,
  (state: State) => state.loaded
);

export const getKt1344Error = createSelector(
  getKt1344State,
  (state: State) => state.error
);

export const getKt1344Data = createSelector(
  getKt1344State,
  (state: State) => state.data
);

export const getKt1344AnatabloKomboList = createSelector(
  getKt1344State,
  (state: State) => state.anatabloKomboList
);
export const getKt1344OIAnatabloKomboList = createSelector(
  getKt1344State,
  (state: State) => state.oiAnatabloKomboList
);
export const getKt1344AHatKomboList = createSelector(
  getKt1344State,
  (state: State) => state.hatKomboList
);

export const getKt1344DefaultRow = createSelector(
  getKt1344State,
  (state: State) => state.defaultRow
);
