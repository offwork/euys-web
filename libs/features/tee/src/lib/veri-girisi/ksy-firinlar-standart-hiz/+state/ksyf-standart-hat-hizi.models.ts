export interface StandartHiz<T> {
  [key: string]: T[];
}

export interface StandarHizlar {
  etag: string;
  yil: number;
  idx: string;
  kokMaxHiz: number;
  sinterMaxHiz: number;
  yf1MaxHiz: number;
  yf2MaxHiz: number;
}
