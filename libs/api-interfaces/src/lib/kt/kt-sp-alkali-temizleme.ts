import { Urun } from '../shared/urun';
import { KtAtAlkaliTemizleme } from './kt-at-alkali-temizleme';

export interface KtSpAlkaliTemizlemeViewModel {
  ktSpAlkaliTemizlemeList: KtSpAlkaliTemizleme[];
  ktAtAlkaliTemizlemeList: KtAtAlkaliTemizleme[];
}

export interface KtSpAlkaliTemizleme {
  id: string;
  minOnBanyoSicaklik: number;
  maxOnBanyoSicaklik: number;
  minOnBanyoKonsantrasyon: number;
  maxOnBanyoKonsantrasyon: number;
  hedefAnaBanyoSicaklik: number;
  minAnaBanyoSicaklik: number;
  maxAnaBanyoSicaklik: number;
  hedefAnaBanyoKonsantrasyon: number;
  minAnaBanyoKonsantrasyon: number;
  maxAnaBanyoKonsantrasyon: number;
  uretimOzellikTipi: string;
  alkaliTemizlemeText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
  alkaliTemizlemeKodu: number;
  spAlkaliTemizlemeKodu: number;
  minKalinlik: number;
  maxKalinlik: number;
  codeAndText: string;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
}
