import { ErrorModel, KtAtEnineKalinlikVeIkiKenarFarklari } from '@euys/api-interfaces';
import { Action, createReducer, on} from '@ngrx/store';
import * as Kt1226Actions from './kt-1226.actions';


export const KT_1226_FEATURE_KEY = 'kt1226';

export interface State {
  data: KtAtEnineKalinlikVeIkiKenarFarklari[];
  defaultRow: KtAtEnineKalinlikVeIkiKenarFarklari;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: '027',
    islemTipiNo: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    enineKalIkiKenarFarkKodu: null,
   
    hedefCrownMm: null,
    minCrownMm: null,
    maxCrownMm: null,
    maxIkiKenarFarkiMm: null,
    aciklama: null,
    enineKalIkiKenarFarkText: null,
    kontrolAktifTaslak: null,
  }, 
};

const kt1226Reducer = createReducer(
  initialState,
  on(Kt1226Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1226Actions.loadKt1226Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1226Actions.loadKt1226Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1226Actions.saveKt1226Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1226Actions.saveKt1226Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

  export function reducer(state: State | undefined, action: Action) {
    return kt1226Reducer(state, action);
  }
