import { ErrorModel, KtAt2SckHadIkmalSicakl } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1203Actions from './kt-1203.actions';

export const KT_1203_FEATURE_KEY = 'kt1203';

export interface State {
  data: KtAt2SckHadIkmalSicakl[];
  defaultRow: KtAt2SckHadIkmalSicakl;
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
    olusturanKisi: null,
    islemYapanKisi: null,
    sckHad2IkmalSicaklikKodu: null,
    hedefGirisSicakligi: null,
    minGirisSicakligi: null,
    maxGirisSicakligi: null,
    hedefCikisSicakligi: null,
    minCikisSicakligi: null,
    maxCikisSicakligi: null,
    sckHad2IkmalSicaklikText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1203Reducer = createReducer(
  initialState,
  on(Kt1203Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1203Actions.loadKt1203Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1203Actions.loadKt1203Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1203Actions.saveKt1203Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1203Actions.saveKt1203Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1203Reducer(state, action);
}
