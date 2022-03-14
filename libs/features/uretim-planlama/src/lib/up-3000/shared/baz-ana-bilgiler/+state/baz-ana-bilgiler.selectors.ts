import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BAZ_ANA_BILGILER_FEATURE_KEY,
  State,
} from './baz-ana-bilgiler.reducer';

// Lookup the 'BazAnaBilgiler' feature state managed by NgRx
export const getBazAnaBilgilerState = createFeatureSelector<State>(
  BAZ_ANA_BILGILER_FEATURE_KEY
);

export const getList = createSelector(getBazAnaBilgilerState, (state: State) =>
  state.bazAnaBilgiList.filter(({ yil }) => state.year === yil)
);

export const getLoading = createSelector(
  getBazAnaBilgilerState,
  (state: State) => state.loading
);
