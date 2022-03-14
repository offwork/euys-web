export interface KabaHaddelemePasoModel {
  bobinNo: string;
  hatNo: string;
  id: string;

  descaleBoxStatu: string;
  idUretimKyd: string;
  satir1Kolon1: string;
  satir1Kolon2: string;
  satir1Kolon3: string;
  satir1Kolon4: string;
  satir1Kolon5: string;
  satir1Kolon6: string;
  satir1Kolon7: string;
  satir1Kolon8: string;

  satir2Kolon1: string;
  satir2Kolon2: string;
  satir2Kolon3: string;
  satir2Kolon4: string;
  satir2Kolon5: string;
  satir2Kolon6: string;
  satir2Kolon7: string;
  satir2Kolon8: string;

  satir3Kolon1: string;
  satir3Kolon2: string;
  satir3Kolon3: string;
  satir3Kolon4: string;
  satir3Kolon5: string;
  satir3Kolon6: string;
  satir3Kolon7: string;
  satir3Kolon8: string;
}

export interface FmPratigiModel {
  bobinNo: string;
  hatNo: string;
  prsb1: string;
  prsb2: string;
  f1: string;
  isc1: string;
  f2: string;
  isc2: string;
  f3: string;
  f4: string;
  f5: string;
  f6: string;
  f7: string;
}
export interface FmPratigiModelExt extends FmPratigiModel {
  spanKey: number;
}
