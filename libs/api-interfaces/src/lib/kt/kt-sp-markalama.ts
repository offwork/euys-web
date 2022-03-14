import { KtAtMarkalama } from './kt-at-markalama';

export interface KtSpMarkalamaViewModel {
  ktSpMarkalamaList: KtSpMarkalama[];
  ktAtMarkalamaList: KtAtMarkalama[];
  ktAnatabloMarkalamaList: KtAnatabloMarkalama[];
}
export interface KtSpMarkalama {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  hatKodu: string;
  spMarkalamaKodu: number;
  markalamaKodu: number;
  oiMarkalamaAnaTabloKodu: number;
  codeAndText: string;
  idAndAciklama: string;
}

export interface KtAnatabloMarkalama {
  markalamaAnaTabloKodu: number;
  idAndAciklama: string;
}
