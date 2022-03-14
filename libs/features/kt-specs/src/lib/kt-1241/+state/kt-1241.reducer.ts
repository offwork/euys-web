import { ErrorModel, KtAtKromKaplamaTfsFlor } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1241Actions from './kt-1241.actions';

export const KT_1241_FEATURE_KEY = 'kt1241';

export interface State {
  data: KtAtKromKaplamaTfsFlor[];
  defaultRow: KtAtKromKaplamaTfsFlor;
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
    uretimOzellikTipi: '040',
    kromKaplamaTfsFlorKodu: null,
    minIKaplamaFlorKonsantrasy: null,
    maxIKaplamaFlorKonsantrasy: null,
    minIiKaplamaFlorKonsantras: null,
    maxIiKaplamaFlorKonsantras: null,
    kromKaplamaTfsFlorText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1241Reducer = createReducer(
  initialState,
  on(Kt1241Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1241Actions.loadKt1241Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1241Actions.loadKt1241Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1241Actions.saveKt1241Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1241Actions.saveKt1241Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1241Reducer(state, action);
}
