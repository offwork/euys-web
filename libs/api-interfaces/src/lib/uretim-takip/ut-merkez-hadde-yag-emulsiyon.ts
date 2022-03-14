import { KayitIslemTipiEnum } from '../uretim-planlama';

export interface UtMerkezHaddeYagEmulsiyonModel {
  id: string;
  olcumTarihi: string;
  olcumTarihiDate: Date;
  s1SabNoMgKohG: number;
  s1DemirMgKg: number;
  s1SerAsitYuzdeOleikAsit: number;
  s1StabiliteT8Yuzde: number;
  s1StabiliteT20Yuzde: number;
  s3SabNoMgKohG: number;
  s3DemirMgKg: number;
  s3SerAsitYuzdeOleikAsit: number;
  s3StabiliteT8Yuzde: number;
  s3StabiliteT20Yuzde: number;
  tsabNoMgKohG: number;
  tdemirMgKg: number;
  tserAsitYuzdeOleikAsit: number;
  tstabiliteT8Yuzde: number;
  tstabiliteT20Yuzde: number;
  idMerkezHaddeYagEmulEski: string;
  aktifPasif: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  islemTarihiFormat: string;
  islemSaati: string;
  etag: string;
  kayitIslemtipiEnum?: KayitIslemTipiEnum;
}

export interface UtMerkezHaddeYagEmulsiyonModelCode {
  utMerkezHaddeYagEmulsiyonModel: UtMerkezHaddeYagEmulsiyonModel;
  code: string;
  message: string;
}
