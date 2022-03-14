export interface KtAtDurulama {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  durulamaKodu: number;
  tank1MaxPh: number;
  tank5MaxPh: number;
  tank1MaxIletkenlik: number;
  tank5MaxIletkenlik: number;
  tank1MaxKlorur: number;
  tank5MaxKlorur: number;
  tank1MinBanyoSicakligi: number;
  tank1MaxBanyoSicakligi: number;
  tank5MinBanyoSicakligi: number;
  tank5MaxBanyoSicakligi: number;
  durulamaText: string;
  kontrolAktifTaslak: number;
}
