import { ErrorModel, KtAtAsitlemeTank } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kt1208Actions from './kt-1208.actions';

export const KT_1208_FEATURE_KEY = 'kt1208';

export interface State {
  data: KtAtAsitlemeTank[];
  defaultRow: KtAtAsitlemeTank;
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
    asitlemeTankKodu: null,
    tank1HdfHclKonsantrasyon: null,
    tank1MinHclKonsantrasyon: null,
    tank1MaxHclKonsantrasyon: null,
    tank1MinBanyoSicakligi: null,
    tank1MaxBanyoSicakligi: null,
    tank2HdfHclKonsantrasyon: null,
    tank2MinHclKonsantrasyon: null,
    tank2MaxHclKonsantrasyon: null,
    tank2MinBanyoSicakligi: null,
    tank2MaxBanyoSicakligi: null,
    tank3HdfHclKonsantrasyon: null,
    tank3MinHclKonsantrasyon: null,
    tank3MaxHclKonsantrasyon: null,
    tank3MinBanyoSicakligi: null,
    tank3MaxBanyoSicakligi: null,
    kenarKesmeDurumu: null,
    asitlemeTankText: null,
  },
};

const kt1208Reducer = createReducer(
  initialState,
  on(Kt1208Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1208Actions.loadKt1208Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1208Actions.loadKt1208Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1208Actions.saveKt1208Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1208Actions.saveKt1208Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1208Reducer(state, action);
}
