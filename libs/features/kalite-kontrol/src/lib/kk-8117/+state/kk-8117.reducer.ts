import { createReducer, on, Action } from '@ngrx/store';

import * as Kk8117Actions from './kk-8117.actions';
import { KkUretimYuzeyKusuru } from '@euys/api-interfaces';

export const KK_8117_FEATURE_KEY = 'kk8117';

export interface State {
  yuzeyKusurKaydiList: KkUretimYuzeyKusuru[];
  yuzeyKusurKaydiListLoaded: boolean;
}

export const initialState: State = {
  yuzeyKusurKaydiList: [],
  yuzeyKusurKaydiListLoaded: true,
};

const kk8117Reducer = createReducer(
  initialState,
  on(
    Kk8117Actions.getYuzeyKusurKaydiListSuccess,
    (state, { yuzeyKusurKaydi }) => ({
      ...state,
      yuzeyKusurKaydiListLoaded: true,
      yuzeyKusurKaydiList: yuzeyKusurKaydi,
    })
  ),
  on(Kk8117Actions.getYuzeyKusurKaydiListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kk8117Reducer(state, action);
}
