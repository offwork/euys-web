import { ErrorModel, KtAtCalHattiTavlama } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1216Actions from './kt-1216.actions';

export const KT_1216_FEATURE_KEY = 'kt1216';

export interface State {
  data: KtAtCalHattiTavlama[];
  loaded: boolean; // has the Kt1216 list been loaded
  defaultRow: KtAtCalHattiTavlama;
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
    calHattiTavlamaKodu: null,
    tavlamaKodu: null,
    hedefRth: null,
    minRth: null,
    maxRth: null,
    hedefRts: null,
    minRts: null,
    maxRts: null,
    rtsSure: null,
    hedefGjc: null,
    minGjc: null,
    maxGjc: null,
    hedefRqs: null,
    minRqs: null,
    maxRqs: null,
    hedefOa: null,
    minOa: null,
    maxOa: null,
    oaSure: null,
    hedefFcs: null,
    calHattiTavlamaText: null,
    islemYapanMenu: null,
  },
};

const kt1216Reducer = createReducer(
  initialState,
  on(Kt1216Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1216Actions.loadKt1216Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1216Actions.loadKt1216Failure, (state, { error }) => ({ ...state, error, loaded: true  })),
  on(Kt1216Actions.saveKt1216Success, (state, { record }) => ({ ...state, record, loaded: true   })),
  on(Kt1216Actions.saveKt1216Failure, (state, { error }) => ({ ...state, error, loaded: true   }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1216Reducer(state, action);
}
