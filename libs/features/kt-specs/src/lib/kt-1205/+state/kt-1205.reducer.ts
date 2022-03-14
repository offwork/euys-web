import { ErrorModel, KtAtAgirlik } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1205Actions from './kt-1205.actions';

export const KT_1205_FEATURE_KEY = 'kt1205';

export interface State {
  data: KtAtAgirlik[];
  defaultRow: KtAtAgirlik;
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
    agirlikKodu: null,
    hedefAgirlik: null,
    minAgirlik: null,
    maxAgirlik: null,
    minAgirlikTolerans: null,
    islemYapanMenu: null,
    maxAgirlikTolerans: null,
    agirlikText: null,
    kontrolAktifTaslak: null,

  },
};

const kt1205Reducer = createReducer(
  initialState,
  on(Kt1205Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1205Actions.loadKt1205Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1205Actions.loadKt1205Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1205Actions.saveKt1205Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1205Actions.saveKt1205Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1205Reducer(state, action);
}
