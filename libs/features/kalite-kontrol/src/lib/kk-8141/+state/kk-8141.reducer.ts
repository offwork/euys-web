import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kk8141Actions from './kk-8141.actions';

export const KK_8141_FEATURE_KEY = 'kk8141';

export interface State {
  yuzeyKusurKaydiList: KkUretimYuzeyKusuru[];
  yuzeyKusurKaydiListLoaded: boolean;
}

export const initialState: State = {
  yuzeyKusurKaydiList: [],
  yuzeyKusurKaydiListLoaded: true,
};

const kk8141Reducer = createReducer(
  initialState,
  on(
    Kk8141Actions.getYuzeyKusurKaydiListSuccess,
    (state, { yuzeyKusurKaydi }) => ({
      ...state,
      yuzeyKusurKaydiListLoaded: true,
      yuzeyKusurKaydiList: yuzeyKusurKaydi,
    })
  ),
  on(Kk8141Actions.getYuzeyKusurKaydiListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8141Reducer(state, action);
}
