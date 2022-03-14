import { Urun } from '../shared/urun';
import { KtAtBobHazTempYuzdeUzama } from './kt-at-bob-haz-temp-yuzde-uzama';

export interface KtSpBobHazTempYuzdeUzamaViewModel {
  ktSpBobHazTempYuzdeUzamaList: KtSpBobHazTempYuzdeUzama[];
  ktAtBobHazTempYuzdeUzamaList: KtAtBobHazTempYuzdeUzama[];
}

export interface KtSpBobHazTempYuzdeUzama {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  spBobHazTempYuzdeUzaKodu: number;
  bobHazTempYuzdeUzamaKodu: number;
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
