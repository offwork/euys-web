import { ErrorModel, PfdmGenislikAraligi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Pfdm3102Actions from './pfdm-3102.actions';

export const PFDM_3102_FEATURE_KEY = 'pfdm3102';

export interface State {
  data: PfdmGenislikAraligi[];
  defaultRow: PfdmGenislikAraligi;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    minGenislik: null,
    maxGenislik: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
  },
};

const Pfdm3102Reducer = createReducer(
  initialState,
  on(Pfdm3102Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Pfdm3102Actions.loadPfdm3102Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Pfdm3102Actions.loadPfdm3102Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Pfdm3102Actions.savePfdm3102Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Pfdm3102Actions.savePfdm3102Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Pfdm3102Reducer(state, action);
}
