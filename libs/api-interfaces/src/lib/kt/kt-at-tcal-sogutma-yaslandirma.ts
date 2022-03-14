export interface KtAtTcalSogutmaYaslandirma {
  id: string;

  tcalSogutmaYaslandirmaKodu: number;
  hedefRcsSicaklik: number;
  minRcsSicaklik: number;
  maxRcsSicaklik: number;
  minRcsSogutmaHizi: number;
  maxRcsSogutmaHizi: number;
  hedefOasCsSicaklik: number;
  minOasCsSicaklik: number;
  maxOasCsSicaklik: number;
  minOasCsSogutmaHizi: number;
  maxOasCsSogutmaHizi: number;
  hedefOasCsSure: number;
  minOasCsSure: number;
  maxOasCsSure: number;
  hedefFcsSicaklik: number;
  minFcsSicaklik: number;
  maxFcsSicaklik: number;
  minFcsSogutmaHizi: number;
  maxFcsSogutmaHizi: number;

  uretimOzellikTipi: string;
  durum: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;

  tcalSogutmaYaslandirmaText: string;
  kontrolAktifTaslak: number;
}
