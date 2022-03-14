import { ErrorModel, KtAtSleeveKalinlik } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1248Actions from './kt-1248.actions';

export const KT_1248_FEATURE_KEY = 'kt1248';

export interface State {
  data: KtAtSleeveKalinlik[];
  defaultRow: KtAtSleeveKalinlik;
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
    uretimOzellikTipi: '048',
    sleeveKalinlikKodu: null,
    hedefSleeveKalinlik: null,
    minSleeveKalinlik: null,
    maxSleeveKalinlik: null,
    sleeveKalinlikText: null,
    ozelTalimat: null,
    kontrolAktifTaslak: null,
  },
};

const kt1248Reducer = createReducer(
  initialState,
  on(Kt1248Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1248Actions.loadKt1248Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1248Actions.loadKt1248Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1248Actions.saveKt1248Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1248Actions.saveKt1248Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1248Reducer(state, action);
}
