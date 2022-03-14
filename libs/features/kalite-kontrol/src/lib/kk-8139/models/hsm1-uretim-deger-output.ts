export interface Hsm1UretimDegerOutput {
  ortKalinlik: number;
  ortGenislik: number;
  shOrtalamaIkmalSicakligi: number;
  shOrtalamaSarilmaSicakligi: number;
  minKalinlik: number;
  minGenislik: number;
  shMinIkmalSicakligi: number;
  shMinSarilmaSicakligi: number;
  maxKalinlik: number;
  maxGenislik: number;
  shMaxIkmalSicakligi: number;
  shMaxSarilmaSicakligi: number;
}

export interface Hsm1UretimDegerRowModel {
  ort: number;
  min: number;
  max: number;
}
