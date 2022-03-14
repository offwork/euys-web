import { ErrorModel, KtAtIiTenekeAsitleme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1230Actions from './kt-1230.actions';

export const KT_1230_FEATURE_KEY = 'kt1230';

export interface State {
  data: KtAtIiTenekeAsitleme[];
  loaded: boolean;
  error?: ErrorModel;
  defaultRow: KtAtIiTenekeAsitleme;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    iiTenekeAsitlemeKodu: null,
    minAsitKonsantrasyon: null,
    maxAsitKonsantrasyon: null,
    minDemirKonsantrasyon: null,
    maxDemirKonsantrasyon: null,
    minSicaklik: null,
    maxSicaklik: null,
    uretimOzellikTipi: null,
    iiTenekeAsitlemeText: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    kontrolAktifTaslak: null,

  },
};

const kt1230Reducer = createReducer(
  initialState,
  on(Kt1230Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1230Actions.loadKt1230Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1230Actions.loadKt1230Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1230Actions.saveKt1230Success, (state, { record }) => ({ ...state, record, loaded: true })), 
  on(Kt1230Actions.saveKt1230Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1230Reducer(state, action);
}
