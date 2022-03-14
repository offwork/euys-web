import { ErrorModel, KtAtCgl12Temizleme } from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Kt1221Actions from './kt-1221.actions';

export const KT_1221_FEATURE_KEY = 'kt1221';

export interface State {
  data: KtAtCgl12Temizleme[]; 
  loaded: boolean; // has the Kt1221 list been loaded
  defaultRow: KtAtCgl12Temizleme;
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
    cgl12TemizlemeKodu: null,
    hedefAlkaliTemizlemeSicaklg: null,
    minAlkaliTemizlemeSicakligi: null,
    maxAlkaliTemizlemeSicakligi: null,
    minAlkaliTemizlemeKonsantrs: null,
    maxAlkaliTemizlemeKonsantrs: null,
    hdfElektrolitikTemizlSicakl: null,
    minElektrolitikTemizlSicakl: null,
    maxElektrolitikTemizlSicakl: null,
    minElektrolitikTemizlKonsan: null,
    maxElektrolitikTemizlKonsan: null,
    cgl12TemizlemeText: null,
    islemYapanMenu: null,    
  },
};

const kt1221Reducer = createReducer(
  initialState,
  on(Kt1221Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1221Actions.loadKt1221Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1221Actions.loadKt1221Failure, (state, { error }) => ({ ...state, error, loaded: true  })),
  on(Kt1221Actions.saveKt1221Success, (state, { record }) => ({ ...state, record, loaded: true  })),
  on(Kt1221Actions.saveKt1221Failure, (state, { error }) => ({ ...state, error, loaded: true   }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1221Reducer(state, action);
}
