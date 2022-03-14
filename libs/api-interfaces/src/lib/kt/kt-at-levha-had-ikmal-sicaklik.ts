export interface KtAtLevhaHadIkmalSicaklik {
  id: string;
  uretimOzellikTipi: string;
  levhaHadIkmalSicaklikKodu: number;
  hedefCikisSicakligi: number;
  minCikisSicakligi: number;
  maxCikisSicakligi: number;
  
  hedefTcrKalinligi: number;
  minTcrKalinligi: number;
  maxTcrKalinligi: number;

  hedefTcrBekletmeSicakligi: number;
  minTcrBekletmeSicakligi: number;
  maxTcrBekletmeSicakligi: number;
 

  tcr: string;
  firin: string;

  levhaHadIkmalSicaklikText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
}
