import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as RaporIndirmeActions from './rapor-indirme.actions';
import { RaporIndirmeEntity } from './rapor-indirme.models';

export const RAPOR_INDIRME_FEATURE_KEY = 'raporIndirme';

export interface State extends EntityState<RaporIndirmeEntity> {
  selectedId?: string | number; // which RaporIndirme record has been selected
  loaded: boolean; // has the RaporIndirme list been loaded
  error?: string | null; // last known error (if any)
}

export interface RaporIndirmePartialState {
  readonly [RAPOR_INDIRME_FEATURE_KEY]: State;
}

export const raporIndirmeAdapter: EntityAdapter<RaporIndirmeEntity> = createEntityAdapter<RaporIndirmeEntity>();

export const initialState: State = raporIndirmeAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const raporIndirmeReducer = createReducer(
  initialState,
  on(RaporIndirmeActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(RaporIndirmeActions.loadRaporIndirmeSuccess, (state, { raporIndirme }) =>
    raporIndirmeAdapter.setAll(raporIndirme, { ...state, loaded: true })
  ),
  on(RaporIndirmeActions.loadRaporIndirmeFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return raporIndirmeReducer(state, action);
}
