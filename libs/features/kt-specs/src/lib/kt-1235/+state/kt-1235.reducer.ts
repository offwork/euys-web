import { ErrorModel, KtAtIcCapDisCapTolerans } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1235Actions from './kt-1235.actions';

export const KT_1235_FEATURE_KEY = 'kt1235';

export interface State {
  data: KtAtIcCapDisCapTolerans[];
  defaultRow: KtAtIcCapDisCapTolerans;
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
    icCapDisCapToleransKodu: null,
    hedefIcCap: null,
    minIcCapTolerans: null,
    maxIcCapTolerans: null,
    minDisCap: null,
    maxDisCap: null,
    icCapDisCapToleransText: null,
    kontrolAktifTaslak: null,
    islemYapanMenu: null,
  },
};

const kt1235Reducer = createReducer(
  initialState,
  on(Kt1235Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1235Actions.loadKt1235Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1235Actions.loadKt1235Failure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kt1235Actions.saveKt1235Success, (state, { record }) => ({
    ...state,
    record,
    loaded: false,
  })),
  on(Kt1235Actions.saveKt1235Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1235Reducer(state, action);
}
