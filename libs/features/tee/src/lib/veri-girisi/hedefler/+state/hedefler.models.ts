export interface Hedefler<T> {
  [key: string]: T[];
}

export interface HedefColumn {
  sign: number;
  sira: number;
  unit: string;
  value: number;
}

export interface Hedef {
  idx: string;
  kriterIdx: string;
  yil: string;
  wsaTeeDeger: number;
  wsaNcoDeger: number;
  wsaPoDeger: number;
  wsaKoDeger: number;
  tkTeeDeger: number;
  tkNcoDeger: number;
  tkPoDeger: number;
  tkKoDeger: number;
  wsaTeeSign: number;
  wsaNcoSign: number;
  wsaPoSign: number;
  wsaKoSign: number;
  tkTeeSign: number;
  tkNcoSign: number;
  tkPoSign: number;
  tkKoSign: number;
  etag: string;
  birim: string;
}
