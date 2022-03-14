import { ErrorModel, KtAtMarkalama } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kt1244Actions from './kt-1244.actions';

export const KT_1244_FEATURE_KEY = 'kt1244';

export interface State {
  data: KtAtMarkalama[];
  defaultRow: KtAtMarkalama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    islemYapanMenu: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    durum: "A",
    olusturanKisi: null,
    islemYapanKisi: null,
    markalamaKodu: null,
    markaKodu: null,
    markalamaAciklama: null,
    markalamaText:null,
    markaKoduAciklama:null,
    kontrolAktifTaslak: null,
   
    
  },
};

const kt1244Reducer = createReducer(
  initialState,
  on(Kt1244Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1244Actions.loadKt1244Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1244Actions.loadKt1244Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1244Actions.saveKt1244Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1244Actions.saveKt1244Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1244Reducer(state, action);
}
