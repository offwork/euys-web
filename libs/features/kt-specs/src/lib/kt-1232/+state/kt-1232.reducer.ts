import { ErrorModel, KtAtIiTenekeKalayKimyasal } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kt1232Actions from './kt-1232.actions';

export const KT_1232_FEATURE_KEY = 'kt1232';

export interface State {
  data: KtAtIiTenekeKalayKimyasal[];
  defaultRow: KtAtIiTenekeKalayKimyasal;
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
    islemYapanMenu: null,
    durum: 'A',
    kontrolAktifTaslak: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    iiTenekeKalayKimyasalKodu: null,
    minOnKimyasalIslemKonsantr: null,
    maxOnKimyasalIslemKonsantr: null,
    minKimyasalIslemKonsantrasy: null,
    maxKimyasalIslemKonsantrasy: null,
    minBanyoSicakligi: null,
    maxBanyoSicakligi: null,
    iiTenekeKalayKimyasalText: null,
  },
};

const kt1232Reducer = createReducer(
  initialState,
  on(Kt1232Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1232Actions.loadKt1232Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1232Actions.loadKt1232Failure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kt1232Actions.saveKt1232Success, (state, { record }) => ({
    ...state,
    record,
    loaded: false,
  })),
  on(Kt1232Actions.saveKt1232Success, (state, { record }) => ({
    ...state,
    record,
    loaded: false,
  })),
  on(Kt1232Actions.saveKt1232Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1232Reducer(state, action);
}
