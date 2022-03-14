export interface KtAtAlkaliTemizleme {
  id: string;
  alkaliTemizlemeKodu: number;
  minOnBanyoSicaklik: number;
  maxOnBanyoSicaklik: number;
  minOnBanyoKonsantrasyon: number;
  maxOnBanyoKonsantrasyon: number;
  hedefAnaBanyoSicaklik: number;
  minAnaBanyoSicaklik: number;
  maxAnaBanyoSicaklik: number;
  hedefAnaBanyoKonsantrasyon: number;
  minAnaBanyoKonsantrasyon: number;
  maxAnaBanyoKonsantrasyon: number;
  uretimOzellikTipi: string;
  alkaliTemizlemeText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
}
