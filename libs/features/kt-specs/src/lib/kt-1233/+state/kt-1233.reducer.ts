import { ErrorModel, KtAtIiTenekeKalayKaplama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1233Actions from './kt-1233.actions';

export const KT_1233_FEATURE_KEY = 'kt1233';

export interface State {
  data: KtAtIiTenekeKalayKaplama[];
  defaultRow: KtAtIiTenekeKalayKaplama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  // set initial required properties
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    iiTenekeKalayKaplamaKodu: null,
    minAsitMsaKonsantrasyon: null,
    maxAsitMsaKonsantrasyon: null,
    minKalayKonsantrasyon: null,
    maxKalayKonsantrasyon: null,
    minAddKatkiKonsantrasyon: null,
    maxAddKatkiKonsantrasyon: null,
    minAntioxidanKonsantrasyon: null,
    maxAntioxidanKonsantrasyon: null,
    minFlaksKonsantrasyon: null,
    maxFlaksKonsantrasyon: null,
    minBanyoSicakligi: null,
    maxBanyoSicakligi: null,
    minH2So4Konsantrasyon: null,
    maxH2So4Konsantrasyon: null,
    iiTenekeKalayKaplamaText: null,
  },
};

const kt1233Reducer = createReducer(
  initialState,
  on(Kt1233Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1233Actions.loadKt1233Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1233Actions.loadKt1233Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1233Actions.saveKt1233Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1233Actions.saveKt1233Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1233Reducer(state, action);
}
