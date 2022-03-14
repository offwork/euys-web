import {
  ErrorModel,
  UtStVardiyaUretim,
  UtIsletmeHaddeYagEmulsiyon,
  UtIsletmeHaddeYagEmulsiyonModel,
  IslemTipi,
  ResponseModel,
} from '@euys/api-interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import { map, uniq } from 'lodash';

import * as Ut5107Actions from './ut-5107.actions';

export const UT_5107_FEATURE_KEY = 'ut5107';

export const defaultRow: UtIsletmeHaddeYagEmulsiyonModel = {
  id: null,
  aktifPasif: 'A',
  etag: null,

  islemTipiNo: IslemTipi.KAYIT,
  islemYapanMenu: null,
  olusturanKisi: '109171',
  islemYapanKisi: '109171',
  islemTarihi: null,
  olusturmaTarihi: null,
  vardiyaTarihi: null,

  // s1
  s11YagKonstasyonYuzde: null,
  s11PhDegeri: null,
  s11Iletkenlik: null,
  s12YagKonsantasyonYuzde: null,
  s12PhDegeri: null,
  s12Iletkenlik: null,
  s1EklenenYagLt: null,
  s1EklenenSuM3: null,
  s1SeviyeKirli: null,
  s1SeviyeTemiz: null,

  // s3
  s31YagKonstasyonYuzde: null,
  s31PhDegeri: null,
  s31Iletkenlik: null,
  s32YagKonsantasyonYuzde: null,
  s32PhDegeri: null,
  s32Iletkenlik: null,
  s3EklenenYagLt: null,
  s3EklenenSuM3: null,
  s3SeviyeKirli: null,
  s3SeviyeTemiz: null,

  // t
  t1YagKonstasyonYuzde: null,
  t1PhDegeri: null,
  t1Iletkenlik: null,
  t2YagKonsantasyonYuzde: null,
  t2PhDegeri: null,
  t2Iletkenlik: null,
  teklenenYagLt: null,
  teklenenSuM3: null,
  tseviyeKirli: null,
  tseviyeTemiz: null,

  // dm su
  dmSuPhDegeri: null,
  dmSuIletkenlik: null,

  idIsletmeHaddeYagEmulEski: null,

  vardiyaNo: '1',
  islemTarihiFormat: null,
  islemSaati: null,
  vardiyaTarihiDate: new Date(),
  kayitIslemTipiEnum: IslemTipi.KAYIT,
};

export interface State {
  data?: UtIsletmeHaddeYagEmulsiyonModel[];
  dataLog?: UtIsletmeHaddeYagEmulsiyon[];
  vardiyaUretimleri: UtStVardiyaUretim[];
  vardiyaNoList: string[];
  loaded: boolean;
  error?: ErrorModel;
  utIsletmeHaddeYagEmulsiyonCode?: ResponseModel<UtIsletmeHaddeYagEmulsiyonModel>;
}
export const initialState: State = {
  data: [],
  dataLog: [],
  vardiyaUretimleri: [],
  vardiyaNoList: [],
  loaded: false,
  utIsletmeHaddeYagEmulsiyonCode: {},
};
const ut5107Reducer = createReducer(
  initialState,
  on(Ut5107Actions.init, state => ({
    ...state,
    loaded: false,
    error: null,
    record: null,
  })),
  on(Ut5107Actions.loadUt5107Success, (state, { data }) => ({
    ...state,
    loaded: true,
    vardiyaNoList: uniq(map(data, 'vardiyaNo')).sort(),
    data: data
      .map(item => ({
        ...item,
        vardiyaTarihiDate: new Date(item.vardiyaTarihi),
      }))
      .sort((emulsiyonA, emulsiyonB) =>
        emulsiyonA.vardiyaNo.localeCompare(emulsiyonB.vardiyaNo)
      ),
  })),
  on(Ut5107Actions.loadUt5107LogSuccess, (state, { data }) => ({
    ...state,
    dataLog: data,
  })),
  on(
    Ut5107Actions.saveUt5107Success,
    (state, { utIsletmeHaddeYagEmulsiyon, code }) => ({
      ...state,
      utIsletmeHaddeYagEmulsiyonCode: {
        utIsletmeHaddeYagEmulsiyon: {
          ...utIsletmeHaddeYagEmulsiyon,
          vardiyaTarihiDate: new Date(utIsletmeHaddeYagEmulsiyon.vardiyaTarihi),
        },
        code,
      },
      loaded: true,
    })
  ),
  on(Ut5107Actions.saveUt5107Failure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ut5107Reducer(state, action);
}
