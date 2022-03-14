import { ErrorModel, KtAtNormalize } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kt1245Actions from './kt-1245.actions';

export const KT_1245_FEATURE_KEY = 'kt1245';

export interface State {
  data: KtAtNormalize[];
  defaultRow: KtAtNormalize;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    uretimOzellikTipi: null,
    normalizeKodu:null,
    normalizeZamani:null,
    minNormalizeSicakligi:null,
    maxNormalizeSicakligi:null,
    normalizeText:null,
    durum:"A",
    olusturanKisi:null,
    islemYapanKisi:null,
    islemTipiNo:null,
    islemYapanMenu:null,
    etag:null,
    kontrolAktifTaslak: null,
   
    
  },
};

const kt1245Reducer = createReducer(
  initialState,
  on(Kt1245Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1245Actions.loadKt1245Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1245Actions.loadKt1245Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1245Actions.saveKt1245Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1245Actions.saveKt1245Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1245Reducer(state, action);
}
