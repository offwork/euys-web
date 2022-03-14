import { ErrorModel, KtAtAsitlemeTlv } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';

import * as Kt1209Actions from './kt-1209.actions';

export const KT_1209_FEATURE_KEY = 'kt1209';

export interface State {
  data: KtAtAsitlemeTlv[];
  defaultRow: KtAtAsitlemeTlv;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    asitlemeTlvKodu: null,
    hedefFlex1: null,
    minFlex1: null,
    maxFlex1: null,
    hedefFlex2: null,
    minFlex2: null,
    maxFlex2: null,
    hedefGergi: null,
    minGergi: null,
    maxGergi: null,
    asitlemeTlvText: null,
  },
};

const kt1209Reducer = createReducer(
  initialState,
  on(Kt1209Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1209Actions.loadKt1209Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1209Actions.loadKt1209Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1209Actions.saveKt1209Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1209Actions.saveKt1209Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1209Reducer(state, action);
}
