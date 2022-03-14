import { ErrorModel, KtAtDurulama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1210Actions from './kt-1210.actions';

export const KT_1210_FEATURE_KEY = 'kt1210';

export interface State {
  data: KtAtDurulama[];
  defaultRow: KtAtDurulama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    durum: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    uretimOzellikTipi: '009',
    durulamaKodu: null,
    tank1MaxPh: null,
    tank5MaxPh: null,
    tank1MaxIletkenlik: null,
    tank5MaxIletkenlik: null,
    tank1MaxKlorur: null,
    tank5MaxKlorur: null,
    tank1MinBanyoSicakligi: null,
    tank1MaxBanyoSicakligi: null,
    tank5MinBanyoSicakligi: null,
    tank5MaxBanyoSicakligi: null,
    durulamaText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1210Reducer = createReducer(
  initialState,
  on(Kt1210Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1210Actions.loadKt1210Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1210Actions.loadKt1210Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1210Actions.saveKt1210Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1210Actions.saveKt1210Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1210Reducer(state, action);
}
