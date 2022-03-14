import { Urun } from "../shared/urun";
import { KtAtBobinBalikKuyrugu } from "./kt-at-bobin-balik-kuyrugu";

export interface KtSpBobinBalikKuyruguViewModel {
  ktSpBobinBalikKuyruguList: KtSpBobinBalikKuyrugu[];
  ktAtBobinBalikKuyruguList: KtAtBobinBalikKuyrugu[];
}
export interface KtSpBobinBalikKuyrugu {
  id: string;
  etag: string;
  uretimOzellikTipi: string;
  islemTipiNo: number;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemYapanMenu: string;
  bobinBalikKuyruguAciklama: string;
  kontrolAktifTaslak: number;
  bobinBalikKuyruguKodu: number;
  spBobinBalikKuyruguKodu: number;
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
