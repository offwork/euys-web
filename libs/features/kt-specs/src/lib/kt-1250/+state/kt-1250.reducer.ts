import { createReducer, on, Action } from '@ngrx/store';
import { ErrorModel, KtAtTemperHaddeYuzdeUzama } from '@euys/api-interfaces';

import * as Kt1250Actions from './kt-1250.actions';

export const KT_1250_FEATURE_KEY = 'kt1250';

export interface State {
  data: KtAtTemperHaddeYuzdeUzama[];
  defaultRow: KtAtTemperHaddeYuzdeUzama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    tempHadTempYuzdeUzamaKodu: null,
    hedefYuzdeUzama: null,
    minYuzdeUzama: null,
    maxYuzdeUzama: null,
    minTemperSertlik: null,
    maxTemperSertlik: null,
    uretimOzellikTipi: '050',
    durum: 'A',
    olusturanKisi: '100396',
    islemYapanKisi: '100396',
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    tempHadTempYuzdeUzamaText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1250Reducer = createReducer(
  initialState,
  on(Kt1250Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1250Actions.loadKt1250Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1250Actions.loadKt1250Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1250Actions.saveKt1250Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1250Actions.saveKt1250Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1250Reducer(state, action);
}
