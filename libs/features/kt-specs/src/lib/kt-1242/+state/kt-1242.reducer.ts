import { ErrorModel,KtAtKromKaplamaTfsSo4 } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1242Actions from './kt-1242.actions';

export const KT_1242_FEATURE_KEY = 'kt1242';

export interface State {
  data: KtAtKromKaplamaTfsSo4[];
  defaultRow: KtAtKromKaplamaTfsSo4;
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
    kromKaplamaTfsSo4Kodu: null,
    minIKaplamaSo4Konsantrasyn: null,
    maxIKaplamaSo4Konsantrasyn: null,
    kromKaplamaTfsSo4Text:null,
    kontrolAktifTaslak: null,
   
    
  },
};

const kt1242Reducer = createReducer(
  initialState,
  on(Kt1242Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1242Actions.loadKt1242Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1242Actions.loadKt1242Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1242Actions.saveKt1242Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1242Actions.saveKt1242Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1242Reducer(state, action);
}
