import {
  ErrorModel,
  KtAnatabloYaglamaDurumu,
  KtAnatabloYaglamaMarkasi,
  KtAtYaglama,
  KtStYaglamaTipi,
  KtStYaglamaYuzeyi,
} from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1256Actions from './kt-1256.actions';

export const KT_1256_FEATURE_KEY = 'kt1256';

export interface State {
  data: KtAtYaglama[];
  yaglamaMarkalari: KtAnatabloYaglamaMarkasi[];
  yaglamaDurumlari: KtAnatabloYaglamaDurumu[];
  yaglamaYuzeyleri: KtStYaglamaYuzeyi[];
  yaglamaTipleri: KtStYaglamaTipi[];
  defaultRow: KtAtYaglama;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  data: [],
  yaglamaMarkalari: [],
  yaglamaDurumlari: [],
  yaglamaYuzeyleri: [],
  yaglamaTipleri: [],
  loaded: false,
  defaultRow: {
    id: null,
    durum: 'A',
    etag: null,
    islemTipiNo: null,
    islemYapanMenu: null,
    olusturanKisi: '108992',
    islemYapanKisi: '108992',
    uretimOzellikTipi: '058',
    yaglamaKodu: null,
    marka: null,
    yaglamaDurum: null,
    yaglamaYuzeyi: null,
    yaglamaTipi: null,
    yaglamaTipiKodu: null,
    hdfYaglamaMiktari: null,
    minYaglamaMiktari: null,
    maxYaglamaMiktari: null,
    yaglamaText: null,
    kontrolAktifTaslak: null,
  },
};

const kt1256Reducer = createReducer(
  initialState,
  on(Kt1256Actions.init, (state) => ({ ...state, loaded: false, error: null, record: null })),
  on(Kt1256Actions.loadKt1256Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.ktAtYaglamaList,
    yaglamaMarkalari: data.ktAnatabloYaglamaMarkasiList,
    yaglamaDurumlari: data.ktAnatabloYaglamaDurumuList,
    yaglamaYuzeyleri: data.ktStYaglamaYuzeyiList,
    yaglamaTipleri: data.ktStYaglamaTipiList,
  })),
  on(Kt1256Actions.loadKt1256Failure, (state, { error }) => ({ ...state, error, loaded: true })),
  on(Kt1256Actions.saveKt1256Success, (state, { record }) => ({ ...state, record, loaded: true })),
  on(Kt1256Actions.saveKt1256Failure, (state, { error }) => ({ ...state, error, loaded: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1256Reducer(state, action);
}
