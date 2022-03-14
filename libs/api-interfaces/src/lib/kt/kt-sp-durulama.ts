import { Urun } from '../shared/urun';
import { KtAtDurulama } from './kt-at-durulama';

export interface KtSpDurulamaViewModel {
  ktSpDurulamaList: KtSpDurulama[];
  ktAtDurulamaList: KtAtDurulama[];
}

export interface KtSpDurulama {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  durulamaKodu: number;
  spDurulamaKodu: number;
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
