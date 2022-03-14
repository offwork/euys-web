import { ApiInterfaceBase } from '../_base/api-interface.base';

export interface GnDokuman extends ApiInterfaceBase {
  id: string;
  dokumanTipi: string;
  kayitTipi: string;
  dokumanVersiyonNo: number;
  yukDosyaAdi: string;
  orjDosyaAdi: string;
  orjinalResimCozunurluk: string;
  standartResimCozunurluk: string;
  kucukResimCozunurluk: string;
  dosyaYolu: string;
  idDysDokuman?: number;
  idDysKucukDokuman?: number;
  idBbysNode?: number;
  aktifMi: string;
}
