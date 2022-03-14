import { ErrorModel, KtCgl12Tavlama1 } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1219Actions from './kt-1219.actions';

export const KT_1219_FEATURE_KEY = 'kt1219';

export interface State {
  data: KtCgl12Tavlama1[];
  defaultRow: KtCgl12Tavlama1;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    cgl12Tavlama1Kodu: null,
    cgl12TavlamaKodu: null,
    kontrolAktifTaslak: null,
    durum: "A",
    etag: null,
    hedefHsSicaklik: null,
    hedefSsSicaklik: null,
    hedefSsSuresi: null,
    id: null,
    islemTarihi: null,
    islemTipiNo: null,
    islemYapanKisi: null,
    islemYapanMenu: null,
    maxHsIsitmaHizi: null,
    maxHsSicaklik: null,
    maxSsSicaklik: null,
    maxSsSuresi: null,
    minHsIsitmaHizi: null,
    minHsSicaklik: null,
    minSsSicaklik: null,
    minSsSuresi: null,
    olusturanKisi: null,
    olusturmaTarihi: null,
    uretimOzellikTipi: null,
    cgl12Tavlama1Text: null,
  },
};

const kt1201Reducer = createReducer(
  initialState,
  on(Kt1219Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1219Actions.loadKt1219Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1219Actions.loadKt1219Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1219Actions.saveKt1219Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1219Actions.saveKt1219Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1201Reducer(state, action);
}
