import { Urun } from '../shared/urun';
import { KtAtAsitlemeTank } from './kt-at-asitleme-tank';

export interface KtSpAsitlemeTankViewModel {
  ktSpAsitlemeTankList: KtSpAsitlemeTank[];
  ktAtAsitlemeTankList: KtAtAsitlemeTank[];
}

export interface KtSpAsitlemeTank {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  kontrolAktifTaslak: number;
  asitlemeTankKodu: number;
  spAsitlemeTankKodu: number;
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
