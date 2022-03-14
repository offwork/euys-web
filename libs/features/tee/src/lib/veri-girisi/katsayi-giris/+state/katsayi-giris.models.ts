export interface Katsayi<T> {
  [key: string]: T[];
}

export interface KatsayiModel {
  sirket: string;
  sirketSign: number;
  sirketUstGrup: number;
  sirketYuzdesi: number;
  direktorluk: string;
  direktorlukSign: number;
  direktorlukUstGrup: number;
  direktorlukYuzdesi: number;
  basmuhendislik: string;
  basmuhendislikSign: number;
  basmuhendislikUstGrup: number;
  basmuhendislikYuzdesi: number;
  hat: string;
  hatSign: number;
  hatUstGrup: number;
  hatYuzdesi: number;
  hesapGiris: string;
  sira: number;
  kriterIdx: number;
  yil: number;
  etag: string;
  idx: string;
  birim: string;
}
