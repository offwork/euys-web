import { Urun } from "../shared/urun";
import { KtAtKromKaplamaTfsFlor } from "./kt-at-krom-kaplama-tfs-flor";

export interface KtSpKromKaplamaTfsFlorViewModel {
  ktSpKromKaplamaTfsFlorList: KtSpKromKaplamaTfsFlor[];
  ktAtKromKaplamaTfsFlorList: KtAtKromKaplamaTfsFlor[]
}

export interface KtSpKromKaplamaTfsFlor {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  minIKaplamaFlorKonsantrasy: number;
  maxIKaplamaFlorKonsantrasy: number;
  minIiKaplamaFlorKonsantras: number;
  maxIiKaplamaFlorKonsantras: number;
  kromKaplamaTfsFlorText: string;
  kontrolAktifTaslak: number;
  kromKaplamaTfsFlorKodu: number;
  spKromKaplamaTfsFlorKodu: number;
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
