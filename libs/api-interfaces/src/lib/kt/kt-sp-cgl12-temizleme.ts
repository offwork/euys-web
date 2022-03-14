import { Urun } from '../shared/urun';
import { KtAtCgl12Temizleme } from './kt-at-cgl12-temizleme';

export interface KtSpCgl12TemizlemeViewModel {
  ktSpCgl12TemizlemeList: KtSpCgl12Temizleme[];
  ktAtCgl12TemizlemeList: KtAtCgl12Temizleme[];
}
export interface KtSpCgl12Temizleme {
  id: string;
  uretimOzellikTipi: string;
  hedefAlkaliTemizlemeSicaklg: number;
  minAlkaliTemizlemeSicakligi: number;
  maxAlkaliTemizlemeSicakligi: number;
  minAlkaliTemizlemeKonsantrs: number;
  maxAlkaliTemizlemeKonsantrs: number;
  hdfElektrolitikTemizlSicakl: number;
  minElektrolitikTemizlSicakl: number;
  maxElektrolitikTemizlSicakl: number;
  minElektrolitikTemizlKonsan: number;
  maxElektrolitikTemizlKonsan: number;
  cgl12TemizlemeText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
  cgl12TemizlemeKodu: number;
  SpCgl12TemizlemeKodu: number;
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
