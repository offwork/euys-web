import { ErrorModel, KtAtTeleskopiToleransi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1249Actions from './kt-1249.actions';

export const KT_1249_FEATURE_KEY = 'kt1249';

export interface State {
  data: KtAtTeleskopiToleransi[];
  defaultRow: KtAtTeleskopiToleransi;
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
    uretimOzellikTipi: '049',
    teleskopiToleransiKodu: null,
    maxTeleskopiToleransi: null,
    ozelTalimat: null,
    kontrolAktifTaslak: null,
  },
};

const kt1249Reducer = createReducer(
  initialState,
  on(Kt1249Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1249Actions.loadKt1249Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1249Actions.loadKt1249Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1249Actions.saveKt1249Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1249Actions.saveKt1249Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1249Reducer(state, action);
}
