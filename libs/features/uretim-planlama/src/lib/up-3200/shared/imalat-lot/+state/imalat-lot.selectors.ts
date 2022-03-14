import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMALAT_LOT_FEATURE_KEY, State } from './imalat-lot.reducer';

// Lookup the 'ImalatLot' feature state managed by NgRx
export const getImalatLotState = createFeatureSelector<State>(
  IMALAT_LOT_FEATURE_KEY
);

export const getLoading = createSelector(
  getImalatLotState,
  (state: State) => state.loading
);

export const getImalatLotList = createSelector(
  getImalatLotState,
  (state: State) => state.imalatLotList
);

export const getTedarikTipiList = createSelector(
  getImalatLotState,
  (state: State) => state.tedarikTipiList
);

export const getStatuList = createSelector(
  getImalatLotState,
  (state: State) => state.statuList
);
