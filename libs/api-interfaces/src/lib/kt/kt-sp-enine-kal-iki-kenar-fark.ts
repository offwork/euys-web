import { Urun } from '../shared/urun';
import { KtAtEnineKalinlikVeIkiKenarFarklari } from './kt-at-enine-kalinlik-ve-iki-kenar-farklari';

export interface KtSpEnineKalinlikVeIkiKenarFarklariViewModel {
  ktSpEnineKalIkiKenarFarkList: KtSpEnineKalinlikVeIkiKenarFarklariSpec[];
  ktAtEnineKalinIkiKenarFarkList: KtAtEnineKalinlikVeIkiKenarFarklari[];
}

export interface KtSpEnineKalinlikVeIkiKenarFarklariSpec {
  durum: string;
  etag: string;
  enineKalIkiKenarFarkKodu: number;
  spEnineKalinIkiKenarFarkKodu: number;
  id: string;
  islemTipiNo: number;
  islemYapanKisi: string;
  islemYapanMenu: string;
  maxKalinlik: number;
  minKalinlik: number;
  maxGenislik: number;
  minGenislik: number;
  olusturanKisi: string;
  uretimOzellikTipi: string;
  kontrolAktifTaslak: number;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
  codeAndText: string;
}
