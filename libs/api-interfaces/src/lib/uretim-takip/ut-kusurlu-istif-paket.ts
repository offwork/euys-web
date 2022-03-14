export interface UtKusurluIstifPaketModel {
  id: string;
  hatKodu: string;
  kusurluIstifPaket: string;
  kusurluIstifPaketTipi: string;
  kusurluIstifPaketKodu: string;
  yil: string;
  kusurluIstifKalite: string;
  paketAgirlik: number;
  ithalSlabKodu: string;
  onayTarihi: Date;
  onaylayanKisi: string;
  bobinNo: string;
  idYariMamul: string;
  kusurluIstifStatu: string;
  aktifPasif: string;
  olusturmaTarihi: string;
  olusturmaTarihiDate: Date;
  olusturanKisi: string;
  islemTarihi: string;
  islemTarihiDate: Date;
  islemYapanKisi: string;
  islemTipiNo: number;
  islemYapanMenu: string;
  etag: string;
  yariMamul: string;
  hatTanim: string;
  kusurluIstifStatuTanim: string;
  kusurluIstifKaliteTanim: string;
  baslangicTarihi: string;
  bitisTarihi: string;
  iptalNedeni: string;
  iptalTarihi: Date;
  iptalEdenKisi: string;
  vardiyaNo: string;
}

export interface UtKusurluIstifPaketiComboValueModel {
  utStKusurIstifKaliteModelList: UtStKusurIstifKaliteModelList[];
  utStHatTanimModelList: UtStHatTanimModelList[];
}

export interface UtStKusurIstifKaliteModelList {
  kusurluIstifKaliteTanim: string;
  kusurluIstifKalite: string;
}

export interface UtStHatTanimModelList {
  kusurluIstifKaliteTanim: string;
  hatKodu: string;
  hatUzunTanim: string;
}
export interface KusurluIstifSorguModel {
  aktifPasif?: string;
  kusurluIstifStatu?: string;
  hatKodu?: string;
  baslangicTarihi?: string;
  bitisTarihi?: string;
  kusurluIstifPaket?: string;
}

export interface HatKoduTanimModel {
  hatKodu: string;
  hatKoduTanim: string;
}
export interface StatuModel {
  id: string;
  value: string;
}
