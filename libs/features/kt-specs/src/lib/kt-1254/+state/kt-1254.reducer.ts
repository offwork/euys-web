import { ErrorModel, KtAtTincalHattiTemizleme } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1254Actions from './kt-1254.actions';

export const KT_1254_FEATURE_KEY = 'kt1254';

export interface State {
  data: KtAtTincalHattiTemizleme[];
  defaultRow: KtAtTincalHattiTemizleme;
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
    durum: 'A',
    olusturanKisi: null,
    islemYapanKisi: null,
    tincalHattiTemizlemeKodu: null,
    hedefAlkaliTemizlemeSicakli: null,
    minAlkaliTemizlemeSicakligi: null,
    maxAlkaliTemizlemeSicakligi: null,
    minAlkaliTemizlemeKonsantra: null,
    maxAlkaliTemizlemeKonsantra: null,
    hdfElektrolitikTemizlSicakl: null,
    minElektrolitikTemizlSicakl: null,
    maxElektrolitikTemizlSicakl: null,
    minElektrolitikTemizlKonsan: null,
    maxElektrolitikTemizlKonsan: null,
    islemYapanMenu: null,
    tincalHattiTemizlemeText: null,
    kontrolAktifTaslak: null,

  },
};

const kt1254Reducer = createReducer(
  initialState,
  on(Kt1254Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1254Actions.loadKt1254Success, (state, { data }) => ({ ...state, loaded: true, data })),
  on(Kt1254Actions.loadKt1254Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1254Actions.saveKt1254Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1254Actions.saveKt1254Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1254Reducer(state, action);
}
