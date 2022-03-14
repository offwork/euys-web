import { ErrorModel, KtAtBobHazTempYuzdeUzama } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1215Actions from './kt-1215.actions';

export const KT_1215_FEATURE_KEY = 'kt1215';

export interface State {
  data: KtAtBobHazTempYuzdeUzama[];
  loaded: boolean; // has the Kt1215 list been loaded
  defaultRow: KtAtBobHazTempYuzdeUzama;
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
    bobHazTempYuzdeUzamaKodu: null,
    hedefYuzdeUzama: null,
    minYuzdeUzama: null,
    maxYuzdeUzama: null,
    bobHazTempYuzdeUzamaText: null,
    islemYapanMenu: null,
  },
};

const kt1215Reducer = createReducer(
  initialState,
  on(Kt1215Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1215Actions.loadKt1215Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1215Actions.loadKt1215Failure, (state, { error }) => ({ ...state, error, loaded: true  })),
  on(Kt1215Actions.saveKt1215Success, (state, { record }) => ({ ...state, record, loaded: true   })),
  on(Kt1215Actions.saveKt1215Failure, (state, { error }) => ({ ...state, error, loaded: true   }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1215Reducer(state, action);
}
