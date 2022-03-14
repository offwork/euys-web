import { Urun } from "../shared/urun";
import { KtAtIiTenekeKalayKimyasal } from "./kt-at-ii-teneke-kalay-kimyasal";

export interface KtSpIiTenekeKalayKimyasalViewModel {
  ktSpIiTenekeKalayKimyasalList: KtSpIiTenekeKalayKimyasal[];
  ktAtIiTenekeKalayKimyasalList: KtAtIiTenekeKalayKimyasal[];
}

export interface KtSpIiTenekeKalayKimyasal {
  id: string;
  uretimOzellikTipi: string;
  minOnKimyasalIslemKonsantr: number;
  maxOnKimyasalIslemKonsantr: number;
  minKimyasalIslemKonsantrasy: number;
  maxKimyasalIslemKonsantrasy: number;
  minBanyoSicakligi: number;
  maxBanyoSicakligi: number;
  iiTenekeKalayKimyasalText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
  iiTenekeKalayKimyasalKodu: number;
  spIiTenekeKalayKimyslKodu: number;
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
