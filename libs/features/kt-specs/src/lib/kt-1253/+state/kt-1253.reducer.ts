import { ErrorModel, KtAtTincalHattiTavlama } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1253Actions from './kt-1253.actions';

export const KT_1253_FEATURE_KEY = 'kt1253';

export interface State {
  data: KtAtTincalHattiTavlama[];
  defaultRow: KtAtTincalHattiTavlama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  loaded: false,
  defaultRow: {
    id: null,

    tincalHattiTavlamaKodu: null,
    tincalTavlamaKodu: null,
    hedefHsSicaklik: null,
    minHsSicaklik: null,
    maxHsSicaklik: null,
    minHsIsitmaHizi: null,
    maxHsIsitmaHizi: null,
    hedefSsSicaklik: null,
    minSsSicaklik: null,
    maxSsSicaklik: null,
    hedefSsSuresi: null,
    minSsSuresi: null,
    maxSsSuresi: null,

    uretimOzellikTipi: null,
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    etag: null,
    tincalHattiTavlamaText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1253Reducer = createReducer(
  initialState,
  on(Kt1253Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1253Actions.loadKt1253Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1253Actions.loadKt1253Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1253Actions.saveKt1253Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1253Actions.saveKt1253Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1253Reducer(state, action);
}
