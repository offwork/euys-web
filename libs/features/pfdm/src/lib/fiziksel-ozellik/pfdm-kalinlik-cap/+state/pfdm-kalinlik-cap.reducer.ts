import { ErrorModel, KtAtAgirlik, PfdmKalinlikCap } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as PfdmKalinlikCapActions from './pfdm-kalinlik-cap.actions';

export const PFDM_KALINLIK_CAP_FEATURE_KEY = 'PfdmKalinlikCap';

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

const PfdmKalinlikCapReducer = createReducer(
  initialState,
  on(PfdmKalinlikCapActions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(PfdmKalinlikCapActions.loadPfdmKalinlikCapSuccess, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(PfdmKalinlikCapActions.loadPfdmKalinlikCapFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(
    PfdmKalinlikCapActions.savePfdmKalinlikCapSuccess,
    (state, { record }) => ({ ...state, record, loaded: true })
  ),
  on(PfdmKalinlikCapActions.savePfdmKalinlikCapFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return PfdmKalinlikCapReducer(state, action);
}
