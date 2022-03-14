import { ErrorModel, KtAtLevhaHadIkmalSicaklik } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1243Actions from './kt-1243.actions';

export const KT_1243_FEATURE_KEY = 'kt1243';

export interface State {
  data: KtAtLevhaHadIkmalSicaklik[];
  defaultRow: KtAtLevhaHadIkmalSicaklik;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    uretimOzellikTipi: null,
    levhaHadIkmalSicaklikKodu: null,

    hedefCikisSicakligi: null,
    minCikisSicakligi: null,
    maxCikisSicakligi: null,
 
    hedefTcrKalinligi: null,
    minTcrKalinligi: null,
    maxTcrKalinligi: null,

    hedefTcrBekletmeSicakligi: null,
    minTcrBekletmeSicakligi: null,
    maxTcrBekletmeSicakligi: null,
 

    tcr: null,
    firin: null,
    levhaHadIkmalSicaklikText: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: '108993',
    etag: null,
  },
};

const kt1243Reducer = createReducer(
  initialState,
  on(Kt1243Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1243Actions.loadKt1243Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1243Actions.loadKt1243Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1243Actions.saveKt1243Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1243Actions.saveKt1243Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1243Reducer(state, action);
}
