import { ErrorModel, KtAtBobinDilUcu } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1214Actions from './kt-1214.actions';

export const KT_1214_FEATURE_KEY = 'kt1214';

export interface State {
  data: KtAtBobinDilUcu[];
  defaultRow: KtAtBobinDilUcu;
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
    bobinDilUcuKodu: null,
    bobinDilUcuAciklama: null,
    kontrolAktifTaslak: null,
  },
};

const kt1214Reducer = createReducer(
  initialState,
  on(Kt1214Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1214Actions.loadKt1214Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1214Actions.loadKt1214Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1214Actions.saveKt1214Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1214Actions.saveKt1214Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1214Reducer(state, action);
}
