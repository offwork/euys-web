import { ErrorModel, KtAtKromKaplamaTfsCro3 } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1239Actions from './kt-1239.actions';

export const KT_1239_FEATURE_KEY = 'kt1239';

export interface State {
  data: KtAtKromKaplamaTfsCro3[];
  defaultRow: KtAtKromKaplamaTfsCro3;
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
    durum: "A",
    olusturanKisi: null,
    islemYapanKisi: null,
    islemYapanMenu: null,
    kromKaplamaTfsCro3Kodu: null,
    minIKaplamaCro3Konsantrasy: null,
    maxIKaplamaCro3Konsantrasy: null,
    minIiKaplamaCro3Konsantras: null,
    maxIiKaplamaCro3Konsantras: null,
    kromKaplamaTfsCro3Text: null,
    kontrolAktifTaslak: null,
  },
};

const kt1239Reducer = createReducer(
  initialState,
  on(Kt1239Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1239Actions.loadKt1239Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1239Actions.loadKt1239Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1239Actions.saveKt1239Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1239Actions.saveKt1239Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1239Reducer(state, action);
}
