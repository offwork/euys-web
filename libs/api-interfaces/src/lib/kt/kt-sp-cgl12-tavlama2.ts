import { Urun } from '../shared/urun';
import { KtCgl12Tavlama2 } from './kt-cgl12-tavlama2';

export interface KtSpCgl12Tavlama2ViewModel {
  ktSpCgl12Tavlama2List: KtSpCgl12Tavlama2[];
  ktAtCgl12Tavlama2List: KtCgl12Tavlama2[];
}

export interface KtSpCgl12Tavlama2 {
  durum: string;
  etag: string;
  hedefRcsSicaklik: number;
  hedefScsSicaklik: number;
  id: string;
  islemTarihi: Date;
  islemTipiNo: number;
  islemYapanKisi: string;
  islemYapanMenu: string;
  maxRcsHizi: number;
  maxRcsSicaklik: number;
  maxScsHizi: number;
  maxScsSicaklik: number;
  minRcsHizi: number;
  minRcsSicaklik: number;
  minScsHizi: number;
  minScsSicaklik: number;
  olusturanKisi: string;
  olusturmaTarihi: Date;
  uretimOzellikTipi: string;
  kontrolAktifTaslak: number;
  cgl12Tavlama2Text: string;
  cgl12Tavlama2Kodu: number;
  spCgl12Tavlama2Kodu: number;
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
