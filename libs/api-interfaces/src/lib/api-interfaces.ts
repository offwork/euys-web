export interface Message {
  message: string;
}

export interface ResponseModel<T> {
  data?: T;
  message?: string;
  code?: number | string | null;
}

/* Main Navigation Model */
export interface Navs {
  uygulamaKod?: string;
  durum?: string;
  riskSeviyesi?: number;
  sirketTipi?: number;
  uygulamaAd?: string;
  modulKod?: string;
  modulAd: string;
  modulAciklama?: string;
  runModul: string;
  ustModulKod?: string;
  sira?: number;
  ustModulAd?: string;
  altModuller: Navs[];
}

export interface Line {
  idx: string;
  hatKodu: string;
  hatUzunAdi: string;
  hatKisaAdi: string;
  genelOzel: string;
}

export interface Combo extends ComboBase<string> {
  kodu: string;
  adi: string;
}

export interface ComboNumeric extends ComboBase<number> {
  kodu: number;
  adi: string;
}

export interface ComboBase<T extends number | string> {
  kodu: T;
  adi: string;
}

export interface ErrorModel {
  code: string;
  message: string;
}

export const NOTIFICATION_POSITION = {
  TOP_LEFT: 'tl',
  TOP_CENTER: 'tc',
  TOP_RIGHT: 'tr',
  BOTTOM_CENTER: 'bc',
  BOTTOM_LEFT: 'bl',
  BOTTOM_RIGHT: 'br',
} as const;

export const NOTIFICATION_SEVERITY = {
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
} as const;
