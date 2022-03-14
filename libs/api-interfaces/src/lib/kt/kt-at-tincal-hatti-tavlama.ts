export interface KtAtTincalHattiTavlama {
  id: string;

  tincalHattiTavlamaKodu: number;
  tincalTavlamaKodu: string;
  hedefHsSicaklik: number;
  minHsSicaklik: number;
  maxHsSicaklik: number;
  minHsIsitmaHizi: number;
  maxHsIsitmaHizi: number;
  hedefSsSicaklik: number;
  minSsSicaklik: number;
  maxSsSicaklik: number;
  hedefSsSuresi: number;
  minSsSuresi: number;
  maxSsSuresi: number;

  uretimOzellikTipi: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  tincalHattiTavlamaText: string;
  kontrolAktifTaslak: number;

}
