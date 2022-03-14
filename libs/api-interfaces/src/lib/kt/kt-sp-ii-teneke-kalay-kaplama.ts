import { Urun } from '../shared/urun';
import { KtAtIiTenekeKalayKaplama } from './kt-at-ii-teneke-kalay-kaplama';

export interface KtSpIiTenekeKalayKaplamaViewModel {
  ktSpIiTenekeKalayKaplamaList: KtSpIiTenekeKalayKaplama[];
  ktAtIiTenekeKalayKaplamaList: KtAtIiTenekeKalayKaplama[];
}

export interface KtSpIiTenekeKalayKaplama {
  durum: string;
  etag: string;
  iiTenekeKalayKaplamaKodu: number;
  spIiTenekeKalayKaplamaKodu: number;
  id: string;
  islemTipiNo: number;
  islemYapanKisi: string;
  islemYapanMenu: string;
  maxKalinlik: number;
  minKalinlik: number;
  maxGenislik: number;
  minGenislik: number;
  olusturanKisi: string;
  uretimOzellikTipi: string;
  kontrolAktifTaslak: number;
  celikKaliteleri: string[];
  ktOIUrunList: Urun[];
  ktOIUrunListString?: string;
  celikListString?: string;
  codeAndText: string;
}
