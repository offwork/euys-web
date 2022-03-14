import { Urun } from "../shared/urun";
import { KtAtKromKaplamaTfsDragout } from "./kt-at-krom-kaplama-tfs-dragout";

export interface KtSpKromKaplamaTfsDragoutViewModel {
  ktSpKromKaplamaTfsDragoutList: KtSpKromKaplamaTfsDragout[];
  ktAtKromKaplamaTfsDragoutList: KtAtKromKaplamaTfsDragout[]
}

export interface KtSpKromKaplamaTfsDragout {
  id: string;
  uretimOzellikTipi: string;
  minIKaplamaDragOutKonsant: number;
  maxIKaplamaDragOutKonsant: number;
  minIKaplamaDragOutSicaklk: number;
  maxIKaplamaDragOutSicaklk: number;
  minIiKaplamaDragOutKonsan: number;
  maxIiKaplamaDragOutKonsan: number;
  minIiKaplamaDragOutSicakl: number;
  maxIiKaplamaDragOutSicakl: number;
  kromKaplamaTfsDragOutText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanMenu: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  etag: string;
  kontrolAktifTaslak: number;
  kromKaplamaTfsDragOutKodu: number;
  spKromKaplamaTfsDragOutKodu: number;
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
