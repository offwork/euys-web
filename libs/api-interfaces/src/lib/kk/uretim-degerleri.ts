import { ApiInterfaceBase } from '../_base/api-interface.base';

export type HSM2MpcOzellik =
  | 'KALINLIK'
  | 'GENISLIK'
  | 'CROWN'
  | 'WEDGE'
  | 'BOBINICCAPI'
  | 'BOBINDISCAPI'
  | 'SFCIKISSICAKLIGI'
  | 'FIRINSURESI'
  | 'SHGIRISSICAKLIGI'
  | 'SHIKMALSICAKLIGI'
  | 'SHSARILMASICAKLIGI'
  | 'KHCIKISKALINLIGI'
  | 'KHCIKISGENISLIGI'
  | 'KHCIKISSICAKLIGI';

export type HSM1MpcOzellik =
  | 'KALINLIK'
  | 'GENISLIK'
  | 'CROWN'
  | 'WEDGE'
  | 'BOBINICCAPI'
  | 'BOBINDISCAPI'
  | 'SFGIRISSICAKLIGI'
  | 'SFSICAKLIGI'
  | 'SFCIKISSICAKLIGI'
  | 'FIRINSURESI'
  | 'SHGIRISSICAKLIGI'
  | 'SHIKMALSICAKLIGI'
  | 'SHSARILMASICAKLIGI'
  | 'SOGUTMAHIZI'
  | 'SOGUTMAPATERNI';

export interface HSMUretimDegerleri extends ApiInterfaceBase {
  l3Ortalama: number;
  l3OrtalamaIkaz: boolean;
  mpcHedef: number;
  mpcMax: number;
  mpcMin: number;
  mpcOzellik: string;
  olculenOrtalama: number;
  olculenOrtalamaIkaz: boolean;
}

export interface HSM1UretimDegerleri {
  mpcOzellik: HSM1MpcOzellik;
  holdIkaz: boolean;
  l3Max: number;
  l3MaxIkaz: boolean;
  l3Min: number;
  l3MinIkaz: number;
  l3Ortalama: number;
  l3OrtalamaIkaz: boolean;
  mpcHedef: number;
  mpcMax: number;
  mpcMin: number;
  olculenMax: number;
  olculenMaxIkaz: boolean;
  olculenMin: number;
  olculenMinIkaz: boolean;
  olculenOrtalama: number;
  olculenOrtalamaIkaz: boolean;
  toleransDisiMax: number;
  toleransDisiMaxIkaz: boolean;
  toleransDisiMin: number;
  toleransDisiMinIkaz: boolean;
}

export interface HSM2UretimDegerleri extends HSMUretimDegerleri {
  mpcOzellik: HSM2MpcOzellik;
  l3Icinde: number;
  l3Ustunde: number;
  l3Altinda: number;
}
