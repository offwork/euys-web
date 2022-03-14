import { Urun } from "../shared/urun";
import { KtAtIiTenekeAsitleme } from "./kt-at-ii-teneke-asitleme";

export interface KtSpIiTenekeAsitlemeViewModel {
  ktSpIiTenekeAsitlemeList: KtSpIiTenekeAsitleme[];
  ktAtIiTenekeAsitlemeList: KtAtIiTenekeAsitleme[];
}

export interface KtSpIiTenekeAsitleme {
  id: string;
  minAsitKonsantrasyon: number;
  maxAsitKonsantrasyon: number;
  minDemirKonsantrasyon: number;
  maxDemirKonsantrasyon: number;
  minSicaklik: number;
  maxSicaklik: number;
  uretimOzellikTipi: string;
  iiTenekeAsitlemeText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
  iiTenekeAsitlemeKodu: number;
  spIiTenekeAsitlemeKodu: number;
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
