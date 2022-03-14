import { ErrorModel, KtAtDualBazliKaliteSckHadde } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';

import * as Kt1225Actions from './kt-1225.actions';


export const KT_1225_FEATURE_KEY = 'kt1225';

export interface State {
  
  data: KtAtDualBazliKaliteSckHadde[];
  defaultRow: KtAtDualBazliKaliteSckHadde;
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
    dualFazliKaliteSckHadKodu: null,
    bolunmusDusluMasa: null,
    bolge1SogutmaHizi: null,
    bolge2SogutmaHizi: null,
    hedefAraSicaklik: null,
    minAraSicaklik: null,
    maxAraSicaklik: null,
    havadaSogutmaSuresi: null,
    dualFazliKaliteSckHadText: null,
    kontrolAktifTaslak: null,
  },
  
};


const kt1225Reducer = createReducer(
  initialState,
  on(Kt1225Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1225Actions.loadKt1225Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1225Actions.loadKt1225Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1225Actions.saveKt1225Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1225Actions.saveKt1225Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1225Reducer(state, action);
}
