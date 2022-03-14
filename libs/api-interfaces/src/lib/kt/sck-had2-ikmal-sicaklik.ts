export interface SckHad2IkmalSicaklik {
  id: string;
  durum: string;
  etag: string;
  islemTipiNo: number;
  islemYapanMenu?: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  uretimOzellikTipi: string;
  islemTarihi: Date;
  olusturmaTarihi: Date;
  hedefGirisSicakligi: number;
  minGirisSicakligi: number;
  maxGirisSicakligi: number;
  hedefCikisSicakligi: number;
  minCikisSicakligi: number;
  maxCikisSicakligi: number;
  sckHad2IkmalSicaklikKodu: number;
  sckHad2IkmalSicaklikText: string;
}
