import { Urun } from '../..';
import { KtAtKromKaplamaTfsCro3 } from './kt-at-krom-kaplama-tfs-cro3';

export interface KtSpKromKaplamaTfsCro3ViewModel {
  ktSpKromKaplamaTfsCro3List: KtSpKromKaplamaTfsCro3[];
  ktAtKromKaplamaTfsCro3List: KtAtKromKaplamaTfsCro3[];
}

export interface KtSpKromKaplamaTfsCro3 {
  durum: string;
  etag: string;
  kromKaplamaTfsCro3Kodu: number;
  spKromKaplamaTfsCro3Kodu: number;
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
