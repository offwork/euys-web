import { ErrorModel, PfdmKaliteGrup } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Pfdm3104Actions from './pfdm-3104.actions';

export const PFDM_3104_FEATURE_KEY = 'pfdm3104';

export interface State {
  data: PfdmKaliteGrup[];
  defaultRow: PfdmKaliteGrup;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    kaliteGrup: null,
    kaliteGrupTanim: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
  },
};

const Pfdm3104Reducer = createReducer(
  initialState,
  on(Pfdm3104Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Pfdm3104Actions.loadPfdm3104Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Pfdm3104Actions.loadPfdm3104Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Pfdm3104Actions.savePfdm3104Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Pfdm3104Actions.savePfdm3104Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Pfdm3104Reducer(state, action);
}
