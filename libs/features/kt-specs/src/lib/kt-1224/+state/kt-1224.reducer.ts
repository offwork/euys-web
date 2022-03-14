import { ErrorModel, KtAtDokumCelikKalitesi } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1224Actions from './kt-1224.actions';

export const KT_1224_FEATURE_KEY = 'kt1224';

export interface State {
  data: KtAtDokumCelikKalitesi[];
  defaultRow: KtAtDokumCelikKalitesi;
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
    dokumCelikKalitesiKodu: null,
    dokumCelikKalitesi: null,
  },
};

const kt1224Reducer = createReducer(
  initialState,
  on(Kt1224Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1224Actions.loadKt1224Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1224Actions.loadKt1224Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1224Actions.saveKt1224Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1224Actions.saveKt1224Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1224Reducer(state, action);
}

