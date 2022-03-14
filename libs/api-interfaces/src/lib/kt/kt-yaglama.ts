export interface KtAtYuzeyGorunumuViewModel {
  ktAtYuzeyGorunumuList: KtAtYuzeyGorunumu[];
  ktOiTanimYuzeyDurumuList: KtOiTanimYuzeyDurumu[];
  ktOiTanimPuruzBirimList: KtOiTanimPuruzBirim[];
}

export interface KtAtYuzeyGorunumu {
  id: string;
  uretimOzellikTipi: string;
  olusturanKisi: string;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  durum: string;
  yuzeyGorunumuKodu: number;
  puruzlulukBirimKodu: number;
  yuzeyDurumKodu: number;
  minPuruzluluk: number;
  maxPuruzluluk: number;
  puruzlulukBirimi: string;
  comboYuzeyDurumAciklama: string;
  yuzeyGorunumuText: string;
  kontrolAktifTaslak: number;
}

export interface KtOiTanimPuruzBirim {
  puruzlulukBirimKodu: number;
  puruzlulukBirimi: string;
}

export interface KtOiTanimYuzeyDurumu {
  yuzeyDurumKodu: number;
  comboYuzeyDurumAciklama: string;
}
