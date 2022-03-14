import { Urun } from '../shared/urun';
import { KtAtBobinDilUcu } from './kt-at-bobin-dil-ucu';

export interface KtSpBobinDilUcuViewModel {
  ktSpBobinDilUcuList: KtSpBobinDilUcu[];
  ktAtBobinDilUcuList: KtAtBobinDilUcu[];
}

export interface KtSpBobinDilUcu {
  id: string;
  etag: string;
  uretimOzellikTipi: string;
  islemTipiNo: number;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  bobinDilUcuAciklama: string;
  kontrolAktifTaslak: number;
  bobinDilUcuKodu: number;
  spBobinDilUcuKodu: number;
  maxGenislik: number;
  minGenislik: number;
  minKalinlik: number;
  maxKalinlik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
