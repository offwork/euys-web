import { Urun } from "../shared/urun";
import { KtAtBafHattiTavlama } from "./kt-at-baf-hatti-tavlama";

export interface KtSpBafHattiTavlamaViewModel {
  ktSpBafHattiTavlamaList: KtSpBafHattiTavlama[];
  ktAtBafHattiTavlamaList: KtAtBafHattiTavlama[];
}

export interface KtSpBafHattiTavlama {
  id: string;
  bafTavlamaKodu: string;
  bafTavlamaAciklama: string;
  bafHattiTavlamaText: string;
  uretimOzellikTipi: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
  bafHattiTavlamaKodu: number;
  spBafHattiTavlamaKodu: number;
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
