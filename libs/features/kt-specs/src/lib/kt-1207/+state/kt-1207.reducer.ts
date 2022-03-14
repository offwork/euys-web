import { KtAtAmbalajPaket } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1207Actions from './kt-1207.actions';

export const KT_1207_FEATURE_KEY = 'kt1207';

export interface State {
  data: KtAtAmbalajPaket[];
  loaded: boolean;
  error?: string;
  defaultRow: KtAtAmbalajPaket;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    ambalajPaketKodu: null,
    ambalajPaketAciklama: null,
    kagitTipi: null,
    paketTipi: null,
    yukelemeDurumu: null,
    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    etag: null,
    ambalajPaketText: null,
    kontrolAktifTaslak: null,
    islemYapanMenu: null,
  },
};

const kt1207Reducer = createReducer(
  initialState,
  on(Kt1207Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1207Actions.loadKt1207Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1207Actions.loadKt1207Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1207Actions.saveKt1207Success, (state, { record }) =>  ({ ...state, record, loaded: true })),
  on(Kt1207Actions.saveKt1207Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1207Reducer(state, action);
}
