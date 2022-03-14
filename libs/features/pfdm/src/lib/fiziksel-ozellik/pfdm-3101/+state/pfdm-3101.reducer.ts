import { ErrorModel, PfdmKalinlikCap } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Pfdm3101Actions from './pfdm-3101.actions';

export const PFDM_3101_FEATURE_KEY = 'pfdm3101';

export interface State {
  data: PfdmKalinlikCap[];
  defaultRow: PfdmKalinlikCap;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    minKalinlikCap: null,
    maxKalinlikCap: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
  },
};

const Pfdm3101Reducer = createReducer(
  initialState,
  on(Pfdm3101Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Pfdm3101Actions.loadPfdm3101Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Pfdm3101Actions.loadPfdm3101Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Pfdm3101Actions.savePfdm3101Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Pfdm3101Actions.savePfdm3101Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return Pfdm3101Reducer(state, action);
}
