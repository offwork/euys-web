import { ErrorModel, PfdmYuzeyKaplama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Pfdm3103Actions from './pfdm-3103.actions';

export const PFDM_3103_FEATURE_KEY = 'pfdm3103';

export interface State {
  data: PfdmYuzeyKaplama[];
  defaultRow: PfdmYuzeyKaplama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    yuzeyKaplama: null,
    aciklama: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
  },
};

const Pfdm3103Reducer = createReducer(
  initialState,
  on(Pfdm3103Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Pfdm3103Actions.loadPfdm3103Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Pfdm3103Actions.loadPfdm3103Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Pfdm3103Actions.savePfdm3103Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Pfdm3103Actions.savePfdm3103Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Pfdm3103Reducer(state, action);
}
