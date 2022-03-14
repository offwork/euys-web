import { ErrorModel, KtAtSlabYuzeyTemizleme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1247Actions from './kt-1247.actions';


export const KT_1247_FEATURE_KEY = 'kt1247';

export interface State {
  data: KtAtSlabYuzeyTemizleme[];
  defaultRow: KtAtSlabYuzeyTemizleme;
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
    slabYuzeyTemizlemeKodu: null,
    slabTamirKontrolTipi: null,
    slabYuzeyTemizlemeAciklama: null,
    slabYuzeyTemizlemeText: null,
    kontrolAktifTaslak: null,

  },
};

const kt1247Reducer = createReducer(
  initialState,
  on(Kt1247Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1247Actions.loadKt1247Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1247Actions.loadKt1247Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1247Actions.saveKt1247Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1247Actions.saveKt1247Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1247Reducer(state, action);
}
