import { ErrorModel, KtAtKalinlikSapmaAraligi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1236Actions from './kt-1236.actions';

export const KT_1236_FEATURE_KEY = 'kt1236';

export interface State {
  data: KtAtKalinlikSapmaAraligi[];
  defaultRow: KtAtKalinlikSapmaAraligi;
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
    uretimOzellikTipi: '034',
    kalinlikSapmaAraligiKodu: null,
    kalinlikSapmaKodu5Band: null,
    toplamSapmaDegeri: null,
    minSapmaDegeri: null,
    maxSapmaDegeri: null,
    kalinlikSapmaAraligiText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1236Reducer = createReducer(
  initialState,
  on(Kt1236Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1236Actions.loadKt1236Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1236Actions.loadKt1236Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1236Actions.saveKt1236Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1236Actions.saveKt1236Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1236Reducer(state, action);
}
