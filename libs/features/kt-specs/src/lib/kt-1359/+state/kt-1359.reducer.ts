import { ErrorModel, KTSPYaglamaViewModel } from '@euys/api-interfaces';
import { KtSpYaglamaSpec } from '@euys/api-interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as Kt1359Actions from './kt-1359.actions';

export const KT_1359_FEATURE_KEY = 'kt1359';

export interface State {
  ktSpYaglamaList: KtSpYaglamaSpec[];
  ktSpYaglamaListLoaded: boolean;
  config: KTSPYaglamaViewModel;
  configLoaded: boolean;
  data: KtSpYaglamaSpec[];
  defaultRow: KtSpYaglamaSpec;
  loaded: boolean;
  error?: ErrorModel;
}

export const initialState: State = {
  ktSpYaglamaList: [],
  ktSpYaglamaListLoaded: false,
  config: null,
  configLoaded: false,
  defaultRow: {
    celikKodlari: null,
    durum: null,
    etag: null,
    hatKodu: null,
    id: null,
    islemTarihi: null,
    islemTipiNo: null,
    islemYapanKisi: null,
    islemYapanMenu: null,
    kontrolAktifTaslak: null,
    marka: null,
    maxKalinlik: null,
    minKalinlik: null,
    olusturanKisi: null,
    olusturmaTarihi: null,
    spYaglamaKodu: null,
    uretimOzellikTipi: null,
    urunKodlari: [],
    urunKodu: null,
    yaglamaAciklama: null,
    yaglamaDurum: null,
    yaglamaKodu: null,
    yaglamaYuzeyi: null,
    yerliIhrac: null,
  },
  data: [],
  loaded: false,
};

const kt1359Reducer = createReducer(
  initialState,
  on(Kt1359Actions.initYaglamaListSuccess, (state, { data }) => ({
    ...state,
    ktSpYaglamaListLoaded: true,
    ktSpYaglamaList: data,
  })),
  on(Kt1359Actions.initYaglamaListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kt1359Actions.initConfigSuccess, (state, { data }) => ({
    ...state,
    configLoaded: true,
    config: data,
  })),
  on(Kt1359Actions.initYaglamaListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(Kt1359Actions.saveKt1359Success, (state, { record }) => ({
    ...state,
    record,
    loaded: true,
  })),
  on(Kt1359Actions.saveKt1359Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return kt1359Reducer(state, action);
}
