import { ErrorModel, KtAtIiTenekeKalayErgitme } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1231Actions from './kt-1231.actions';

export const KT_1231_FEATURE_KEY = 'kt1231';

export interface State {
  data: KtAtIiTenekeKalayErgitme[];
  loaded: boolean; // has the Kt1231 list been loaded
  defaultRow: KtAtIiTenekeKalayErgitme;
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
    iiTenekeKalayErgitmeKodu: null,
    minSicaklik: null,
    maxSicaklik: null,
    iiTenekeKalayErgitmeText: null,
    islemYapanMenu: null,
  },
};

const kt1231Reducer = createReducer(
  initialState,
  on(Kt1231Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1231Actions.loadKt1231Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1231Actions.loadKt1231Failure, (state, { error }) => ({ ...state, error, loaded: true  })),
  on(Kt1231Actions.saveKt1231Success, (state, { record }) => ({ ...state, record, loaded: true   })),
  on(Kt1231Actions.saveKt1231Failure, (state, { error }) => ({ ...state, error, loaded: true   }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1231Reducer(state, action);
}
