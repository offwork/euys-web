import {
  ErrorModel,
  IslemTipi,
  KayitIslemTipiEnum,
  UtMerkezHaddeYagEmulsiyonModel,
  UtMerkezHaddeYagEmulsiyonModelCode,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as Ut5109Actions from './ut-5109.actions';

export const UT_5109_FEATURE_KEY = 'ut5109';

export interface State {
  data?: UtMerkezHaddeYagEmulsiyonModel[];
  loglar?: UtMerkezHaddeYagEmulsiyonModel[];
  utMerkezHaddeYagEmulsiyonModelCode?: UtMerkezHaddeYagEmulsiyonModelCode;
  updatedData?: UtMerkezHaddeYagEmulsiyonModel;
  defaultRow: UtMerkezHaddeYagEmulsiyonModel;
  //selectedId?: string | number; // which Ut5109 record has been selected
  loaded: boolean; // has the Ut5109 list been loaded
  error?: ErrorModel; // last known error (if any)
}

export const initialState: State = {
  loaded: false,
  defaultRow: {
    id: null,
    olcumTarihi: null,
    olcumTarihiDate: new Date(),
    s1SabNoMgKohG: null,
    s1DemirMgKg: null,
    s1SerAsitYuzdeOleikAsit: null,
    s1StabiliteT8Yuzde: null,
    s1StabiliteT20Yuzde: null,
    s3SabNoMgKohG: null,
    s3DemirMgKg: null,
    s3SerAsitYuzdeOleikAsit: null,
    s3StabiliteT8Yuzde: null,
    s3StabiliteT20Yuzde: null,
    tsabNoMgKohG: null,
    tdemirMgKg: null,
    tserAsitYuzdeOleikAsit: null,
    tstabiliteT8Yuzde: null,
    tstabiliteT20Yuzde: null,
    idMerkezHaddeYagEmulEski: null,
    aktifPasif: 'A',
    olusturanKisi: '109171',
    islemYapanKisi: '109171',
    islemTipiNo: IslemTipi.KAYIT,
    islemYapanMenu: null,
    islemTarihiFormat: null,
    islemSaati: null,
    etag: null,
    kayitIslemtipiEnum: KayitIslemTipiEnum.KAYIT_EKLEME,
  },
};

const ut5109Reducer = createReducer(
  initialState,
  on(Ut5109Actions.init, state => ({ ...state, loaded: false, error: null })),
  on(Ut5109Actions.loadUt5109Success, (state, { data }) => ({
    ...state,
    loaded: true,
    data: data.map(item => ({
      ...item,
      olcumTarihiDate: new Date(item.olcumTarihi),
    })),
  })),

  on(Ut5109Actions.loadUt5109LoglarSuccess, (state, { data }) => ({
    ...state,
    loaded: true,
    loglar: data.slice().sort((itemB, itemA) => {
      const a = new Date(itemA.islemTarihiFormat + 'T' + itemA.islemSaati);
      const b = new Date(itemB.islemTarihiFormat + 'T' + itemB.islemSaati);
      return a.getTime() - b.getTime();
    }),
  })),
  on(Ut5109Actions.loadUt5109Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  //Save
  on(
    Ut5109Actions.saveUt5109Success,
    (state, { utMerkezHaddeYagEmulsiyonModel, code, message }) => ({
      ...state,
      utMerkezHaddeYagEmulsiyonModelCode: {
        utMerkezHaddeYagEmulsiyonModel,
        code,
        message,
      },
      loaded: true,
    })
  ),
  on(Ut5109Actions.saveUt5109Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),
  //Update
  on(
    Ut5109Actions.updateUt5109Success,
    (state, { utMerkezHaddeYagEmulsiyonModel, code, message }) => ({
      ...state,
      updatedData: utMerkezHaddeYagEmulsiyonModel,
      utMerkezHaddeYagEmulsiyonModelCode: {
        utMerkezHaddeYagEmulsiyonModel,
        code,
        message,
      },
      loaded: true,
    })
  ),
  on(Ut5109Actions.updateUt5109Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5109Reducer(state, action);
}
