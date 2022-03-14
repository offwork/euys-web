export interface KtAtAgirlik {
  id: string;
  agirlikKodu: number;
  hedefAgirlik: number;
  minAgirlik: number;
  maxAgirlik: number;
  minAgirlikTolerans: number;
  maxAgirlikTolerans: number;
  uretimOzellikTipi: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  agirlikText: string;
  kontrolAktifTaslak: number;
}
