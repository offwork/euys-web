import { ErrorModel, KtAtOzelAgirlik } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1246Actions from './kt-1246.actions';

export const KT_1246_FEATURE_KEY = 'kt1246';

export interface State {
  data: KtAtOzelAgirlik[];
  defaultRow: KtAtOzelAgirlik;
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
    ozelAgirlikKodu: null,
    hedefOzelAgirlik: null,
    minOzelAgirlik: null,
    maxOzelAgirlik: null,
    ozelAgirlikText: null,
    kontrolAktifTaslak: null,
    islemYapanMenu: null,
  },
};

const kt1246Reducer = createReducer(
  initialState,
  on(Kt1246Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1246Actions.loadKt1246Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1246Actions.loadKt1246Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1246Actions.saveKt1246Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1246Actions.saveKt1246Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1246Reducer(state, action);
}
