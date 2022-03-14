export interface OrtalamaSicaklikIkaz {
  l3Min: number;
  l3Max: number;
  mpcHedef: number;
  olculenOrtalama: number;
}

export interface OrtSicaklikValidationParams {
  mpcHedef: number;
  olculenOrtalama: number;
}

export interface OrtalamaKalGenIkaz {
  mpcMin: number;
  mpcMax: number;
  olculenOrtalama: number;
  toleransDisiMin: number;
  toleransDisiMax: number;
}
