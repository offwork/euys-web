import { Urun } from '../shared/urun';
import { KtCgl12Tavlama1 } from './kt-cgl12-tavlama1';

export interface KtSpCgl12Tavlama1ViewModel {
  ktSpCgl12Tavlama1List: KtSpCgl12Tavlama1[];
  ktAtCgl12Tavlama1List: KtCgl12Tavlama1[];
}

export interface KtSpCgl12Tavlama1 {
  cgl12Tavlama1Text: string;
  cgl12TavlamaKodu: string;
  durum: string;
  etag: string;
  hedefHsSicaklik: number;
  hedefSsSicaklik: number;
  hedefSsSuresi: number;
  id: string;
  islemTarihi: Date;
  islemTipiNo: number;
  islemYapanKisi: string;
  islemYapanMenu: string;
  maxHsIsitmaHizi: number;
  maxHsSicaklik: number;
  maxSsSicaklik: number;
  maxSsSuresi: number;
  minHsIsitmaHizi: number;
  minHsSicaklik: number;
  minSsSicaklik: number;
  minSsSuresi: number;
  olusturanKisi: string;
  olusturmaTarihi: Date;
  uretimOzellikTipi: string;
  kontrolAktifTaslak: number;
  cgl12Tavlama1Kodu: number;
  spCgl12Tavlama1Kodu: number;
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
