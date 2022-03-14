export interface KtAtCalHattiTavlama {
  id: string;
  uretimOzellikTipi: string;
  calHattiTavlamaKodu: number;
  tavlamaKodu: string;
  hedefRth: number;
  minRth: number;
  maxRth: number;
  hedefRts: number;
  minRts: number;
  maxRts: number;
  rtsSure: number;
  hedefGjc: number;
  minGjc: number;
  maxGjc: number;
  hedefRqs: number;
  minRqs: number;
  maxRqs: number;
  hedefOa: number;
  minOa: number;
  maxOa: number;
  oaSure: number;
  hedefFcs: number;
  calHattiTavlamaText: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  kontrolAktifTaslak: number;
}