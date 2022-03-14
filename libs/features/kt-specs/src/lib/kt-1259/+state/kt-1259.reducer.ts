import { ErrorModel, KtAtYansitmaTesti } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1259Actions from './kt-1259.actions';

export const KT_1259_FEATURE_KEY = 'kt1259';

export interface State {
  data: KtAtYansitmaTesti[];
  defaultRow: KtAtYansitmaTesti;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    yansitmaTestiKodu: null,
    hdfYansitmaTesti: null,
    minYansitmaTesti: null,
    maxYansitmaTesti: null,
    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    yansitmaTestiText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1259Reducer = createReducer(
  initialState,
  on(Kt1259Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1259Actions.loadKt1259Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1259Actions.loadKt1259Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1259Actions.saveKt1259Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1259Actions.saveKt1259Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1259Reducer(state, action);
}
