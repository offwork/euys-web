import { ErrorModel, KtCgl12HavaSogutma } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kt1218Actions from './kt-1218.actions';

export const KT_1218_FEATURE_KEY = 'kt1218';

export interface State {
  data: KtCgl12HavaSogutma[];
  defaultRow: KtCgl12HavaSogutma;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    cgl12HavaSogutmaAjcKodu: null,
    durum: 'A',
    etag: null,
    hedefSicaklik: null,
    id: null,
    islemTarihi: null,
    islemTipiNo: null,
    islemYapanKisi: null,
    islemYapanMenu: null,
    maxSicaklik: null,
    minSicaklik: null,
    cgl12HavaSogutmaAjcText: null,
    olusturanKisi: null,
    olusturmaTarihi: null,
    uretimOzellikTipi: null,
    kontrolAktifTaslak: null,
  },
};

const kt1218Reducer = createReducer(
  initialState,
  on(Kt1218Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Kt1218Actions.loadKt1218Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data,
  })),
  on(Kt1218Actions.loadKt1218Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  on(Kt1218Actions.saveKt1218Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1218Actions.saveKt1218Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1218Reducer(state, action);
}
