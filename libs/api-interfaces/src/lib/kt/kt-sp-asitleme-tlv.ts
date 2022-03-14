import { Urun } from '../shared/urun';
import { KtAtAsitlemeTlv } from './kt-at-asitleme-tlv';

export interface KtSpAsitlemeTlvViewModel {
  ktSpAsitlemeTlvList: KtSpAsitlemeTlv[];
  ktAtAsitlemeTlvList: KtAtAsitlemeTlv[];
}

export interface KtSpAsitlemeTlv {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  asitlemeTlvKodu: number;
  spAsitlemeTlvKodu: number;
  minKalinlik: number;
  maxKalinlik: number;
  minGenislik: number;
  maxGenislik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
