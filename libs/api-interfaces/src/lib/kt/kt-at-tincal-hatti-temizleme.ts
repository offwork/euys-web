export interface KtAtTincalHattiTemizleme {
  id: string;
  tincalHattiTemizlemeKodu: number;
  hedefAlkaliTemizlemeSicakli: number;
  minAlkaliTemizlemeSicakligi: number;
  maxAlkaliTemizlemeSicakligi: number;
  minAlkaliTemizlemeKonsantra: number;
  maxAlkaliTemizlemeKonsantra: number;
  hdfElektrolitikTemizlSicakl: number;
  minElektrolitikTemizlSicakl: number;
  maxElektrolitikTemizlSicakl: number;
  minElektrolitikTemizlKonsan: number;
  maxElektrolitikTemizlKonsan: number;
  uretimOzellikTipi: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  tincalHattiTemizlemeText: string;
  kontrolAktifTaslak: number;
}
