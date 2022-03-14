import { KtAtBafHattiTavlama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1212Actions from './kt-1212.actions';

export const KT_1212_FEATURE_KEY = 'kt1212';

export interface State {
  data: KtAtBafHattiTavlama[];
  loaded: boolean;
  error?: string;
  defaultRow: KtAtBafHattiTavlama;
}
export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    bafHattiTavlamaKodu: null,
    bafTavlamaKodu: null,
    bafTavlamaAciklama: null,
    bafHattiTavlamaText: null,
    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    kontrolAktifTaslak: null,

  },
};

const kt1205Reducer = createReducer(
  initialState,
  on(Kt1212Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1212Actions.loadKt1212Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1212Actions.loadKt1212Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1212Actions.saveKt1212Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1212Actions.saveKt1212Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1205Reducer(state, action);
}
