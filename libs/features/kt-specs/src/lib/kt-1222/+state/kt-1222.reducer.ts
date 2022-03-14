import { ErrorModel, KtAtCgl12TempYuzdeUzama } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1222Actions from './kt-1222.actions';

export const KT_1222_FEATURE_KEY = 'kt1222';

export interface State {
  data: KtAtCgl12TempYuzdeUzama[]; 
  loaded: boolean; // has the Kt1222 list been loaded
  defaultRow: KtAtCgl12TempYuzdeUzama;
  error?: ErrorModel; // last known error (if any)
}

export const initialState: State = {
  data: [], // set initial required properties
  loaded: false,
  defaultRow: {
    id: null,
    etag: null,
    uretimOzellikTipi: null,
    islemTipiNo: null,
    kontrolAktifTaslak: null,
    durum: "A",
    olusturanKisi: null,
    islemYapanKisi: null,
    cgl12TemprYuzdeUzamaKodu: null,
    hedefYuzdeUzama: null,
    minYuzdeUzama: null,
    maxYuzdeUzama: null,
    cgl12TemprYuzdeUzamaText: null,
    islemYapanMenu: null,
  },
};

const kt1222Reducer = createReducer(
  initialState,
  on(Kt1222Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1222Actions.loadKt1222Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1222Actions.loadKt1222Failure, (state, { error }) => ({ ...state, error, loaded: true  })),
  on(Kt1222Actions.saveKt1222Success, (state, { record }) => ({ ...state, record, loaded: true   })),
  on(Kt1222Actions.saveKt1222Failure, (state, { error }) => ({ ...state, error, loaded: true   }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1222Reducer(state, action);
}
