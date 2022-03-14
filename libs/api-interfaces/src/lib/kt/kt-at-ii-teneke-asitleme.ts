export interface KtAtIiTenekeAsitleme {
  id: string;
  iiTenekeAsitlemeKodu: number;
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
}
