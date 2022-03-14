import { ErrorModel, KtAtDemirAlasimVeGaFirini } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1223Actions from './kt-1223.actions';


export const KT_1223_FEATURE_KEY = 'kt1223';

export interface State {
  data: KtAtDemirAlasimVeGaFirini[];
  defaultRow: KtAtDemirAlasimVeGaFirini;
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
    demirAlasimGaFiriniKodu: null,
    ortalamaDemirAlasim: null,
    minDemirAlasim: null,
    maxDemirAlasim: null,
    hedefGaFirindaTutmaSicaklg: null,
    minGaFirindaTutmaSicakligi: null,
    maxGaFirindaTutmaSicakligi: null,
    hedefGaFirindaTutmaSuresi: null,
    minGaFirindaTutmaSuresi: null,
    maxGaFirindaTutmaSuresi: null,
    demirAlasimGaFiriniText: null,
    kontrolAktifTaslak: null,
  }, 
};

const kt1223Reducer = createReducer(
  initialState,
  on(Kt1223Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1223Actions.loadKt1223Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1223Actions.loadKt1223Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1223Actions.saveKt1223Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1223Actions.saveKt1223Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1223Reducer(state, action);
}
