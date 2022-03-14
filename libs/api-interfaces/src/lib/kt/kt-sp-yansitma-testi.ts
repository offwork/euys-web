import { Urun } from '../shared/urun';
import { KtAtYansitmaTesti } from './kt-at-yansitma-testi';

export interface KtSpYansitmaTestiViewModel {
  ktSpYansitmaTestiList: KtSpYansitmaTesti[];
  ktAtYansitmaTestiList: KtAtYansitmaTesti[];
}

export interface KtSpYansitmaTesti {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  yansitmaTestiKodu: number;
  spYansitmaTestiKodu: number;
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
