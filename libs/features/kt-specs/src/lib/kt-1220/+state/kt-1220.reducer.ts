import { ErrorModel, KtCgl12Tavlama2 } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1220Actions from './kt-1220.actions';

export const KT_1220_FEATURE_KEY = 'kt1220';

export interface State {
  data: KtCgl12Tavlama2[];
  defaultRow: KtCgl12Tavlama2;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    cgl12Tavlama2Kodu: null,
    kontrolAktifTaslak: null,
    durum: "A",
    etag: null,
    hedefRcsSicaklik: null,
    hedefScsSicaklik: null,
    id: null,
    islemTarihi: null,
    islemTipiNo: null,
    islemYapanKisi: null,
    islemYapanMenu: null,
    maxRcsHizi: null,
    maxRcsSicaklik: null,
    maxScsHizi: null,
    maxScsSicaklik: null,
    minRcsHizi: null,
    minRcsSicaklik: null,
    minScsHizi: null,
    minScsSicaklik: null,
    olusturanKisi: null,
    olusturmaTarihi: null,
    uretimOzellikTipi: null,
    cgl12Tavlama2Text: null,
  },
};

const kt1201Reducer = createReducer(
  initialState,
  on(Kt1220Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1220Actions.loadKt1220Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1220Actions.loadKt1220Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1220Actions.saveKt1220Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1220Actions.saveKt1220Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1201Reducer(state, action);
}
