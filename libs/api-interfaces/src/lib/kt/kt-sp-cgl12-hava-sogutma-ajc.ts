import { Urun } from '../shared/urun';
import { KtCgl12HavaSogutma } from './kt-cgl12-hava-sogutma';

export interface KtSpCgl12HavaSogutmaAjcViewModel {
  ktSpCgl12HavaSogutmaAjcList: KtSpCgl12HavaSogutmaAjc[];
  ktAtCgl12HavaSogutmaAjcList: KtCgl12HavaSogutma[];
}

export interface KtSpCgl12HavaSogutmaAjc {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  spCgl12HavaSgtmaAjcKodu: number;
  cgl12HavaSogutmaAjcKodu: number;
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
